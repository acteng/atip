# Manual setup

- `gcloud projects create atip-test-1`, just a few seconds
	- billing?
	- cloud build API?
- manually link the billing account: <https://console.cloud.google.com/billing/linkedaccount?project=atip-test-1>
	- without this, `gcloud app --project=atip-test-1 describe` and similar will look like a permissions error

- `gcloud app --project=atip-test-1 create --region=europe-west`, few seconds
	- note the region is fixed, and there's only one GAE app per project

- to deploy
	- `gcloud app --project=atip-test-1 deploy --quiet`



- https://cloud.google.com/appengine/docs/standard/nodejs/runtime for reference
- https://cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step



# TODO

- IAP
- Terraform automation
- CI with GH actions (only to a dev project)
- Copy things to GCS
