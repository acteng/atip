# GCP deployment

## Part 1: Deploy to GAE

1.  First manually set up gcloud and a billing account
2.  `gcloud projects create atip-test-1` (few seconds)
3.  Manually link the billing account: <https://console.cloud.google.com/billing/linkedaccount?project=atip-test-1>
	- Without this, `gcloud app --project=atip-test-1 describe` will look like a permissions error
4.  `gcloud app --project=atip-test-1 create --region=europe-west` (few seconds)
	- Note the region is fixed, and there's only one GAE app per project

To deploy:

1.  Set up the thing to deploy: `npm run build && cd server && rm -rf dist && cp -R ../dist .`
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

### TODO

- Automate oauth consent screen setup? <https://issuetracker.google.com/issues/35907249?pli=1>
- Publish the app
- Figure out if the oauth consent screen test users are relevnt or not
- Try the entire dft.gov.uk domain
- How to add someone with gcloud? Per <https://cloud.google.com/iap/docs/managing-access>, probably something to set the IAM policy with `roles/iap.httpsResourceAccessor`
- `gcloud iap --project=atip-test-1 web enable --resource-type=app-engine`
	- first time, asks to enable `appengine.googleapis.com`
	- What're the oauth client ID/secret needed?

## Part 3: Configure audit logs

Go to <https://console.cloud.google.com/iam-admin/audit?project=atip-test-1>, "Cloud Identity-Aware Proxy API", enable all 3.

### TODO

- Automation
- Figure out where audit logs show up

## TODO

- See who the user is inside the app
	- <https://cloud.google.com/iap/docs/identity-howto>
- Terraform automation
- CI with GH actions (only to a dev project)
- Copy things to a private GCS bucket
