# Service

This root module provisions the resources required for the service.

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
   cd cloud/browse/service
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
   cd cloud/browse/service
   ```

1. Authenticate with Google Cloud:

   ```bash
   gcloud auth application-default login
   ```

1. Select the Terraform workspace for the environment:

   ```bash
   terraform workspace select ${ENVIRONMENT}
   ```

1. Disable deletion protection for the service by modifying `cloud/browse/service/application/main.tf`:

   ```diff
    resource "google_cloud_run_v2_service" "browse_page" {
   +  deletion_protection = false
      ...
    }
   ```

1. Apply the change:

   ```bash
   terraform apply
   ```

1. Revert the modification:

   ```bash
   git checkout application/main.tf
   ```
   
1. Delete the resources:

   ```bash
   terraform destroy
   ```