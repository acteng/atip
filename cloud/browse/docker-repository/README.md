# Docker repository

This root module provisions an [Artifact Registry](https://cloud.google.com/artifact-registry/docs/overview) to store
Docker images for this service.

## Provisioning

1. Change directory:

   ```bash
   cd cloud/docker-repository
   ```

1. Authenticate with Google Cloud:

   ```bash
   gcloud auth application-default login
   ```

1. Initialise Terraform:

   ```bash
   terraform init
   ```

1. Apply the changes:

   ```bash
   terraform apply
   ```

## Configuring GitHub Actions

To configure the [CI workflow](../../.github/workflows/ci.yml) with credentials to push images to the repository:

1. Obtain the Docker repository service account private key:

   ```bash
   terraform output -raw github_action_push_private_key
   ```
   
1. [Set the GitHub Actions repository secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) `GCP_CREDENTIALS_PUSH` to the private key

## Destroying

1. Change directory:

   ```bash
   cd cloud/docker-repository
   ```

1. Authenticate with Google Cloud:

   ```bash
   gcloud auth application-default login
   ```

1. Initialise Terraform:

   ```bash
   terraform init
   ```

1. Delete the resources:

   ```bash
   terraform destroy
   ```
