resource "google_storage_bucket" "main" {
  name     = "${var.project}-tf-backend"
  project  = var.project
  location = var.location

  uniform_bucket_level_access = true
  public_access_prevention    = "enforced"

  versioning {
    enabled = true
  }
}
