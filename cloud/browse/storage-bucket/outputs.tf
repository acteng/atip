output "bucket_name" {
  description = "GCS storage bucket name"
  value       = google_storage_bucket.main.name
}
