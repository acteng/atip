terraform {
  backend "gcs" {
    bucket = "dft-rlg-atip-dev-tf-backend"
    prefix = "storage-bucket"
  }
}

locals {
  day_in_seconds  = 60 * 60 * 24
  env             = terraform.workspace
  project         = "${var.project_prefix}-${local.env}"
  gcs_bucket_name = local.project
}

resource "google_storage_bucket" "main" {
  name     = local.gcs_bucket_name
  project  = local.project
  location = var.location

  uniform_bucket_level_access = true
  public_access_prevention    = "inherited"

  soft_delete_policy {
    retention_duration_seconds = 7 * local.day_in_seconds
  }
}

import {
  id = "${local.project}/${local.gcs_bucket_name}"
  to = google_storage_bucket.main
}
