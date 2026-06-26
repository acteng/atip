terraform {
  backend "gcs" {
    bucket = "dft-rlg-atip-dev-tf-backend"
    prefix = "docker-repository"
  }
}

locals {
  day_in_seconds = 24 * 60 * 60
}

resource "google_project_service" "artifact_registry" {
  project = var.project
  service = "artifactregistry.googleapis.com"
}

resource "google_project_service" "compute" {
  project = var.project
  service = "compute.googleapis.com"
}

resource "google_project_service" "container_scanning" {
  project = var.project
  service = "containerscanning.googleapis.com"
}

resource "google_project_service" "iam_credentials" {
  project = var.project
  service = "iamcredentials.googleapis.com"
}

resource "google_project_iam_audit_config" "artifact_registry_data_write" {
  project = var.project
  service = "artifactregistry.googleapis.com"

  audit_log_config {
    log_type = "DATA_WRITE"
  }
}

resource "google_artifact_registry_repository" "main" {
  project       = var.project
  repository_id = "docker"
  location      = var.location
  format        = "DOCKER"

  cleanup_policies {
    id     = "delete-untagged"
    action = "DELETE"
    condition {
      tag_state = "UNTAGGED"
    }
  }

  cleanup_policies {
    id     = "keep-recent-untagged"
    action = "KEEP"
    condition {
      tag_state  = "UNTAGGED"
      newer_than = "${7 * local.day_in_seconds}s"
    }
  }

  depends_on = [google_project_service.artifact_registry]
}

module "github_action_push" {
  source  = "./github-action-push"
  project = var.project
}
