resource "google_service_account" "main" {
  project      = var.project
  account_id   = "github-action-deploy"
  display_name = "Service account for deploy GitHub Action"
}

resource "google_project_iam_member" "service_account_token_creator" {
  project = var.project
  role    = "roles/iam.serviceAccountTokenCreator"
  member  = "serviceAccount:${google_service_account.main.email}"
}

resource "google_project_iam_member" "run_admin" {
  project = var.project
  role    = "roles/run.admin"
  member  = "serviceAccount:${google_service_account.main.email}"
}

resource "google_service_account_iam_member" "service_account_user" {
  service_account_id = var.cloud_run_service_account_id
  role               = "roles/iam.serviceAccountUser"
  member             = "serviceAccount:${google_service_account.main.email}"
}

resource "google_project_iam_member" "artifact_registry_reader" {
  project = var.docker_repository_project
  role    = "roles/artifactregistry.reader"
  member  = "serviceAccount:${google_service_account.main.email}"
}

resource "google_service_account_key" "main" {
  service_account_id = google_service_account.main.name
  public_key_type    = "TYPE_X509_PEM_FILE"
}
