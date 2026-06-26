terraform {
  backend "gcs" {
    bucket = "dft-rlg-atip-dev-tf-backend"
    prefix = "service"
  }
}

provider "google" {
  project = local.project
}

locals {
  env     = terraform.workspace
  project = "${var.project_prefix}-${local.env}"
  config = {
    dev = {
      use_iap   = false
      keep_idle = false
    }
  }
}


data "terraform_remote_state" "docker_repository" {
  backend = "gcs"
  config = {
    bucket = "${var.project_prefix}-dev-tf-backend"
    prefix = "docker-repository"
  }
}

data "terraform_remote_state" "storage_bucket" {
  backend = "gcs"
  config = {
    bucket = "${var.project_prefix}-dev-tf-backend"
    prefix = "storage-bucket"
  }
  workspace = local.env
}

resource "google_project_service" "run" {
  project = local.project
  service = "run.googleapis.com"
}

module "application" {
  source                    = "./application"
  project                   = local.project
  region                    = var.location
  docker_repository_project = data.terraform_remote_state.docker_repository.outputs.project
  docker_repository_url     = data.terraform_remote_state.docker_repository.outputs.url
  keep_idle                 = local.config[local.env].keep_idle
  gcs_bucket_name           = data.terraform_remote_state.storage_bucket.outputs.bucket_name
  use_iap                   = local.config[local.env].use_iap

  depends_on = [
    google_project_service.run,
  ]
}
