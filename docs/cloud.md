# Manually deploy to GAE

- `gcloud projects create atip-test-1`, just a few seconds
	- cloud build API gets included by default
- manually link the billing account: <https://console.cloud.google.com/billing/linkedaccount?project=atip-test-1>
	- without this, `gcloud app --project=atip-test-1 describe` and similar will look like a permissions error

- `gcloud app --project=atip-test-1 create --region=europe-west`, few seconds
	- note the region is fixed, and there's only one GAE app per project

- to deploy
	- Set up the thing to deploy: `npm run build && cd server && rm -rf dist && cp -R ../dist .`
		- (GH actions will be able to do this; all the dependencies are already there)
		- to test the result locally: `npm run start`
	- `gcloud app --project=atip-test-1 deploy --quiet`, about 90s

- to try the result: `gcloud app browse --project=atip-test-1` or <https://atip-test-1.ew.r.appspot.com/>

- useful debugging
	- <https://console.cloud.google.com/cloud-build/builds;region=europe-west1?project=atip-test-1>
	- `gcloud app --project=atip-test-1 logs read`

## References

- <https://cloud.google.com/appengine/docs/standard/nodejs/runtime>
- <https://cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step>

# Setting up IAP

- `gcloud services --project=atip-test-1 enable iap.googleapis.com`, few seconds
- Go to <https://console.cloud.google.com/apis/credentials/consent?project=atip-test-1> and manually configure the oauth consent screen
	- No automation? <https://issuetracker.google.com/issues/35907249?pli=1>
	- Choose "External" (unless everyone internal can be part of our cloud org?)
	- App name = ATIP test
	- email = dabreegster@gmail.com
	- no logo
	- no app domains or authorized domains
	- scopes: .../auth/userinfo.email (see email)
	- test users: xyz@dft.gov.uk, not activetravelengland.gov.uk
		- these aren't added as principals to IAP, so what are these?
- Go to <https://console.cloud.google.com/security/iap?project=atip-test-1> and enable IAP (it'll have an oauth misconfigured error)
- On that same page, manually add principals
	- Propagation delay is a few minutes

TODO: Try entire dft.gov.uk domain

## Automation

- How to add someone with gcloud? Per <https://cloud.google.com/iap/docs/managing-access>, probably something to set the IAM policy with roles/iap.httpsResourceAccessor
- `gcloud iap --project=atip-test-1 web enable --resource-type=app-engine`
	- first time, asks to enable `appengine.googleapis.com`
	- what're the oauth client ID/secret needed?
- <https://cloud.google.com/iap/docs/authenticate-users-google-accounts>

## Audit logs

<https://cloud.google.com/iap/docs/audit-log-howto>

- <https://console.cloud.google.com/iam-admin/audit?project=atip-test-1>, "Cloud Identity-Aware Proxy API", enable all 3
- TODO: figure out where things show up

# See who the user is inside the app

TODO: <https://cloud.google.com/iap/docs/identity-howto>

# TODO

- Terraform automation
- CI with GH actions (only to a dev project)
- Copy things to a private GCS bucket
