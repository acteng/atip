resource "google_cloud_run_v2_service" "browse_page" {
  name     = "plan"
  project  = var.project
  location = var.region
  ingress  = "INGRESS_TRAFFIC_ALL"

  scaling {
    min_instance_count = var.keep_idle ? 1 : 0
    max_instance_count = 10
  }

  template {
    service_account = google_service_account.cloud_run_browse_page.email

    containers {
      image = "${var.docker_repository_url}/plan:latest"
      env {
        name  = "GCS_BUCKET"
        value = var.gcs_bucket_name
      }
      env {
        name  = "USE_IAP"
        value = var.use_iap
      }
      ports {
        container_port = 8080
      }
    }
  }

  depends_on = [
    google_project_iam_member.cloud_run_artifact_registry_reader
  ]
}

resource "google_service_account" "cloud_run_browse_page" {
  account_id = "cloud-run-browse-page"
}

resource "google_cloud_run_v2_service_iam_binding" "browse_page_run_invoker" {
  name     = google_cloud_run_v2_service.browse_page.name
  project  = var.project
  location = var.region

  role    = "roles/run.invoker"
  members = ["allUsers"]
}

data "google_project" "main" {
  project_id = var.project
}

resource "google_project_iam_member" "cloud_run_artifact_registry_reader" {
  project = var.docker_repository_project
  role    = "roles/artifactregistry.reader"
  member  = "serviceAccount:service-${data.google_project.main.number}@serverless-robot-prod.iam.gserviceaccount.com"
}

resource "google_storage_bucket_iam_member" "cloud_run_storage_bucket_reader" {
  bucket = var.gcs_bucket_name
  role   = "roles/storage.objectViewer"
  member = "serviceAccount:${google_service_account.cloud_run_browse_page.email}"
}
