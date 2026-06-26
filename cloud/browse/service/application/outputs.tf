output "cloud_run_url" {
  description = "Cloud Run URI"
  value       = google_cloud_run_v2_service.browse_page.uri
}
