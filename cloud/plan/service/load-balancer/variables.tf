variable "project" {
  description = "GCP project"
  type        = string
}

variable "region" {
  description = "GCP region"
  type        = string
}

variable "domain" {
  description = "Domain name for the SSL certificate"
  type        = string
}

variable "security_policy_id" {
  description = "Security Policy ID"
  type        = string
}
