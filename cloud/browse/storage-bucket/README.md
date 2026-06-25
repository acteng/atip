# Storage bucket

This root module provisions a [Cloud Storage bucket](https://cloud.google.com/storage/docs/buckets) to be used to store data used by
the client side application.

## Environments

There are multiple environments that replicate the resources which are represented as Terraform workspaces:

* `dev`
* `test`
* `prod`

Set the target environment, for example:

```bash
export ENVIRONMENT=dev
```

## Provisioning

1. Change directory:

   ```bash
   cd cloud/browse/storage-bucket
   ```

1. Authenticate with Google Cloud:

   ```bash
   gcloud auth application-default login
   ```

1. Initialise Terraform:

   ```bash
   terraform init
   ```

1. Create a Terraform workspace for the environment:

   ```bash
   terraform workspace new ${ENVIRONMENT}
   ```

1. Apply the changes:

   ```bash
   terraform apply
   ```

## Destroying

1. Change directory:

   ```bash
   cd cloud/browse/storage-bucket
   ```

1. Authenticate with Google Cloud:

   ```bash
   gcloud auth application-default login
   ```

1. Select the Terraform workspace for the environment:

   ```bash
   terraform workspace select ${ENVIRONMENT}
   ```

1. Disable deletion protection for the service by modifying `cloud/browse/storage-bucket/main.tf`:

   ```diff
    resource "google_storage_bucket" "main" {
   +  force_destroy = true
      ...
    }
   ```

1. Apply the change:

   ```bash
   terraform apply
   ```

1. Revert the modification:

   ```bash
   git checkout main.tf
   ```
   
1. Delete the resources:

   ```bash
   terraform destroy
   ```