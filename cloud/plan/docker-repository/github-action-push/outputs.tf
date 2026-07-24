output "private_key" {
  description = "Service account key for push GitHub Action service account"
  value       = google_service_account_key.main.private_key
  sensitive   = true
}
