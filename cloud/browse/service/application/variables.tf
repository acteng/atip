variable "project" {
  description = "GCP project"
  type        = string
}

variable "region" {
  description = "GCP region"
  type        = string
}

variable "docker_repository_project" {
  description = "Docker repository GCP project"
  type        = string
}

variable "docker_repository_url" {
  description = "Docker repository URL"
  type        = string
}

variable "keep_idle" {
  description = "Whether to keep an instance idle to prevent cold starts"
  type        = bool
}

variable "gcs_bucket_name" {
  description = "GCS bucket name for assets"
  type        = string
}

variable "use_iap" {
  description = "Boolean on whether to use IAP or not"
  type        = bool
}
