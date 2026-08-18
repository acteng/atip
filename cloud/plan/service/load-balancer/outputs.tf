output "url" {
  description = "Load balancer URL"
  value       = "https://${var.domain}"
}

output "ip_address" {
  description = "Load balancer IP address"
  value       = google_compute_global_address.main.address
}
