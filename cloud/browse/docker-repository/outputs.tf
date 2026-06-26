output "project" {
  description = "GCP project"
  value       = google_artifact_registry_repository.main.project
}

output "url" {
  description = "Docker repository URL"
  value = join("", [
    google_artifact_registry_repository.main.location,
    "-docker.pkg.dev/",
    google_artifact_registry_repository.main.project,
    "/",
    google_artifact_registry_repository.main.repository_id
  ])
}

output "github_action_push_private_key" {
  description = "Service account key for push GitHub Action service account"
  value       = module.github_action_push.private_key
  sensitive   = true
}
