# ATIP backend on GCP

This package is a backend to serve ATIP on App Engine. See [architecture](../docs/architecture.md) for details. It's a separate package from the ATIP frontend in the rest of this repo, and could logically be split into a separate git repo if useful.

## Deployment guide

This section is a WIP right now; only use the result for testing! Don't upload any non-public data yet.

Unless other specified, each command below should only take a few seconds to run.

### Set up the GCP project

1. [Install gcloud](https://cloud.google.com/sdk/docs/install)
2. [Hook up gcloud to your GCP account](https://cloud.google.com/sdk/docs/initializing)
3. Pick a project ID (`atip-test-2` in everything below)
4. Create it: `gcloud projects create atip-test-2`
4.  Manually link the billing account: <https://console.cloud.google.com/billing/linkedaccount?project=atip-test-2>
	- You may need to configure a billing account first for your GCP account
	- Without this, `gcloud app --project=atip-test-2 describe` gives a permissions error
5.  Set up App Engine: `gcloud app --project=atip-test-2 create --region=europe-west`
	- Note there's only one GAE app per project, unlike most other GCP services
	- And the region is immutable once you set it for the project!

### Create the GCS bucket

Names and regions should match above.

1.  `gcloud storage --project=atip-test-2 buckets create gs://atip-test-2 --location=EUROPE-WEST2 --uniform-bucket-level-access`
2.  Generate fake scheme data and upload it: `npm run generate-random-schemes && gsutil cp random_schemes.geojson gs://atip-test-2/`
3.  Sync current public layers to GCS. This only works if you have S3 access (aka Dustin). Skip these otherwise, or download another way. This might take a few minutes, depending on your connection: `aws s3 sync s3://atip.uk/layers layers; gsutil -m cp -r ./layers gs://atip-test-2/`

### Deploy

1.  Update `bucket` in `backend/server.js`
2.  Create the files to deploy: `VITE_ON_GCP="true" VITE_RESOURCE_BASE="https://atip-test-2.ew.r.appspot.com/data" npm run build && cd backend && rm -rf dist && cp -R ../dist .`
	- Note we could make Cloud Build do this, but we'd have to get `wasm-pack` and other things set up there first
	- GH Actions will eventually trigger CI deployments for our test environment, and we've already done the work of configuring that build environment
3.  `gcloud app --project=atip-test-2 deploy --quiet` (takes a minute or two)
4.  Try the result: `gcloud app browse --project=atip-test-2` or <https://atip-test-2.ew.r.appspot.com/browse.html>

Useful debugging:

- <https://console.cloud.google.com/cloud-build/builds;region=europe-west1?project=atip-test-2>
- `gcloud app --project=atip-test-2 logs read`

### Protect with IAP

1.  `gcloud services --project=atip-test-2 enable iap.googleapis.com`
2.  `gcloud services --project=atip-test-2 enable cloudresourcemanager.googleapis.com`
3.  Go to <https://console.cloud.google.com/apis/credentials/consent?project=atip-test-2> and manually configure the oauth consent screen
	- Choose "External" (unless everyone internal can be part of our cloud org?)
	- Pick an app name, email
	- No logo, app domains, authorized domains, scopes, or test users
4.  Go to <https://console.cloud.google.com/security/iap?project=atip-test-2> and enable IAP (it'll have an oauth misconfigured error)

Nobody should have access by default. To get the current auth list:

`gcloud iap --project=atip-test-2 web get-iam-policy --resource-type=app-engine`

To add someone:

`gcloud iap --project=atip-test-2 web add-iam-policy-binding --resource-type=app-engine --member=user:foo@bar.com --role=roles/iap.httpsResourceAccessor`

After changing this, there's seemingly a propagation delay of about a minute. You might also need to Ctrl+Shift+R or clear your browser cache.

## TODO

- Automated setup
	- Terraform
	- Oauth consent screen setup? <https://issuetracker.google.com/issues/35907249?pli=1>
	- Automate IAP setup? `gcloud iap --project=atip-test-2 web enable --resource-type=app-engine` needs some unknown oauth client ID/secret
- In the real project
	- Publish the GAE app
	- Optimize [bucket location](https://cloud.google.com/storage/docs/locations) for serving
- Enable audit logs
	- Go to <https://console.cloud.google.com/iam-admin/audit?project=atip-test-2>, "Cloud Identity-Aware Proxy API", enable all 3.
- Consider using the [default storage bucket with GAE](https://cloud.google.com/appengine/docs/standard/using-cloud-storage?tab=node.js#default_bucket), even though we don't need/want write permissions
- [Detect the logged-in user](<https://cloud.google.com/iap/docs/identity-howto>)
- Set up GH actions CI with (only to a test project; we never want to do this for prod)

Unblocked by this:
	- More basemaps
	- Load criticals and scheme data
	- Regional engagement contact list

## Appendix

- For completeness, other options to serve GCS files:
	- ideally: some direct GCS URL that enforces the same IAP auth
	- some LB in front of GCS, then glued to IAP
		- [this won't work for backend buckets?](https://cloud.google.com/iap/docs/load-balancer-howto)
	- **make Express proxy the requests to GCS**
		- add the GAE service account as a storage.objectViewer on the bucket first
	- insecure worst case: public bucket with an obfuscated URL
	- [signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls)
	- [cookie based auth](https://cloud.google.com/storage/docs/collaboration#browser)
- Consider using the GAE [default bucket](https://cloud.google.com/appengine/docs/standard/using-cloud-storage?tab=node.js)?

### References

- <https://cloud.google.com/appengine/docs/standard/nodejs/runtime>
- <https://github.com/alexbakerdev/GCS-Reverse-Proxy>
