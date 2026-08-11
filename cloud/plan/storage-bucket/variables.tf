variable "project_prefix" {
  description = "GCP project prefix"
  type        = string
  default     = "dft-rlg-schemes-gis"
}

variable "location" {
  description = "GCP location"
  type        = string
  # buckets were configured to be multi-region
  default = "eu"
}
