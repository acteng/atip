variable "project" {
  description = "GCP project"
  type        = string
}

variable "docker_repository_project" {
  description = "Docker repository GCP project"
  type        = string
}

variable "cloud_run_service_account_id" {
  description = "Cloud Run service account ID"
  type        = string
}
