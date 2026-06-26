output "cloud_run_url" {
  description = "Cloud Run URI"
  value       = google_cloud_run_v2_service.browse_page.uri
}

output "service_account_id" {
  description = "Cloud Run service account ID"
  value       = google_service_account.cloud_run_browse_page.id
}
