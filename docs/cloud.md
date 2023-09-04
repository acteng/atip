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

# TODO

- IAP
- Terraform automation
- CI with GH actions (only to a dev project)
- Copy things to GCS
