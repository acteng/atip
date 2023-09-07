# ATIP backend on GCP

This package is a backend to serve ATIP on App Engine. See [architecture](../docs/architecture.md) for details. It's a separate package from the ATIP frontend in the rest of this repo, and could logically be split into a separate git repo if useful.

This document describes deployment. It's WIP right now!

## Part 1: Deploy to GAE

1.  First manually set up gcloud and a billing account
2.  `gcloud projects create atip-test-1` (few seconds)
3.  Manually link the billing account: <https://console.cloud.google.com/billing/linkedaccount?project=atip-test-1>
	- Without this, `gcloud app --project=atip-test-1 describe` will look like a permissions error
4.  `gcloud app --project=atip-test-1 create --region=europe-west` (few seconds)
	- Note the region is fixed, and there's only one GAE app per project

To deploy:

1.  Set up the thing to deploy: `VITE_ON_GCP=true npm run build && cd backend && rm -rf dist && cp -R ../dist .`
	- (GH actions will be able to do this; all the dependencies are already there. Otherwise we have to figure out how to get wasm-pack and such working in the build env)
	- To test the result locally: `npm run start`
2.  `gcloud app --project=atip-test-1 deploy --quiet` (60 - 90s)
3.  Try the result: `gcloud app browse --project=atip-test-1` or <https://atip-test-1.ew.r.appspot.com/>

Useful debugging:

- <https://console.cloud.google.com/cloud-build/builds;region=europe-west1?project=atip-test-1>
- `gcloud app --project=atip-test-1 logs read`

### TODO

Automated setup. <https://cloud.google.com/docs/terraform/resource-management/export> may be promising.

### References

- <https://cloud.google.com/appengine/docs/standard/nodejs/runtime>

## Part 2: Protect with IAP

1.  `gcloud services --project=atip-test-1 enable iap.googleapis.com` (few seconds)
2.  Go to <https://console.cloud.google.com/apis/credentials/consent?project=atip-test-1> and manually configure the oauth consent screen
	- Choose "External" (unless everyone internal can be part of our cloud org?)
	- Pick an app name, email
	- No logo, app domains, authorized domains
	- scopes: .../auth/userinfo.email (just checking their email?)
	- test users: xyz@dft.gov.uk, not activetravelengland.gov.uk
		- These aren't added as principals to IAP, so what are these used for?
3.  Go to <https://console.cloud.google.com/security/iap?project=atip-test-1> and enable IAP (it'll have an oauth misconfigured error)
4.  On that same page, manually add principals with "IAP-secured Web App User" role
	- Propagation delay is a few minutes

To get the current auth list:

`gcloud iap --project=atip-test-1 web get-iam-policy --resource-type=app-engine`

To add someone:

`gcloud iap --project=atip-test-1 web add-iam-policy-binding --resource-type=app-engine --member=user:foo@bar.com --role=roles/iap.httpsResourceAccessor`

### TODO

- Automate oauth consent screen setup? <https://issuetracker.google.com/issues/35907249?pli=1>
- Publish the app
- Figure out if the oauth consent screen test users are relevant or not (seemingly not)
- Try the entire dft.gov.uk domain
- `gcloud iap --project=atip-test-1 web enable --resource-type=app-engine`
	- first time, asks to enable `appengine.googleapis.com`
	- What're the oauth client ID/secret needed?

## Part 3: Configure audit logs

Go to <https://console.cloud.google.com/iam-admin/audit?project=atip-test-1>, "Cloud Identity-Aware Proxy API", enable all 3.

### TODO

- Automation
- Figure out where audit logs show up

## Part 4: Setup a GCS bucket

1.  `gcloud storage --project=atip-test-1 buckets create gs://atip-test-1 --location=EUROPE-WEST2 --uniform-bucket-level-access`
2.  Generate fake scheme data and upload it: `npm run generate-random-schemes && gsutil cp random_schemes.geojson gs://atip-test-1/`
3.  Sync current public layers to GCS: `mkdir layers; cd layers; aws s3 sync s3://atip.uk/layers .; gsutil cp -m -r v1 gs://atip-test-1/layers/`

### TODO

- Serve files!
	- Start with easy route snapper files and GeoJSON
	- pmtiles will need CORS
- Serving options
	- ideally: some direct GCS URL that enforces the same IAP auth
	- some LB in front of GCS, then glued to IAP
		- [this won't work for backend buckets?](https://cloud.google.com/iap/docs/load-balancer-howto)
	- **make Express proxy the requests to GCS**
		- add the GAE service account as a storage.objectViewer on the bucket first
		- <https://github.com/alexbakerdev/GCS-Reverse-Proxy> as reference
	- insecure worst case: public bucket with an obfuscated URL
	- [signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls)
	- [cookie based auth](https://cloud.google.com/storage/docs/collaboration#browser)
- Optimize [bucket location](https://cloud.google.com/storage/docs/locations) for serving
- Consider using the GAE [default bucket](https://cloud.google.com/appengine/docs/standard/using-cloud-storage?tab=node.js)?

## Part 5: Detect the logged-in user

<https://cloud.google.com/iap/docs/identity-howto>

## TODO

- Terraform automation
- CI with GH actions (only to a dev project)
- Unblocked by this
	- More basemaps
	- Load criticals and scheme data
	- Regional engagement contact list
