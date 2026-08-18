locals {
  year_in_seconds = 365 * 24 * 60 * 60
}

resource "google_compute_global_address" "main" {
  name    = "plan-${terraform.workspace}"
  project = var.project
}


resource "google_compute_managed_ssl_certificate" "main" {
  name    = "plan"
  project = var.project

  managed {
    domains = [var.domain]
  }
}


resource "google_compute_region_network_endpoint_group" "main" {
  name                  = "plan"
  project               = var.project
  region                = var.region
  network_endpoint_type = "SERVERLESS"

  app_engine {
    service = "default"
  }
}

resource "google_compute_backend_service" "main" {
  name                  = "plan"
  project               = var.project
  load_balancing_scheme = "EXTERNAL_MANAGED"
  security_policy       = var.security_policy_id
  # TODO
  # custom_response_headers = ["Strict-Transport-Security: max-age=${local.year_in_seconds}"]

  backend {
    group = google_compute_region_network_endpoint_group.main.id
  }

  log_config {
    enable = true
  }
}

resource "google_compute_url_map" "main" {
  name            = "plan"
  project         = var.project
  default_service = google_compute_backend_service.main.id
}

resource "google_compute_ssl_policy" "main" {
  name    = "plan"
  project = var.project
  profile = "RESTRICTED"
  # TODO: upgrade to tls 1.3
  min_tls_version = "TLS_1_2"
}

resource "google_compute_target_https_proxy" "https" {
  name             = "plan-https"
  project          = var.project
  url_map          = google_compute_url_map.main.id
  ssl_certificates = [google_compute_managed_ssl_certificate.main.id]
  ssl_policy       = google_compute_ssl_policy.main.id
}

resource "google_compute_global_forwarding_rule" "https" {
  name                  = "plan-https"
  project               = var.project
  ip_address            = google_compute_global_address.main.id
  target                = google_compute_target_https_proxy.https.id
  port_range            = "443"
  load_balancing_scheme = "EXTERNAL_MANAGED"
}

# HTTP-to-HTTPS redirect

resource "google_compute_url_map" "https_redirect" {
  name    = "plan-https-redirect"
  project = var.project

  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}

resource "google_compute_target_http_proxy" "http" {
  name    = "plan-http"
  project = var.project
  url_map = google_compute_url_map.https_redirect.id
}

resource "google_compute_global_forwarding_rule" "http" {
  name                  = "plan-http"
  project               = var.project
  ip_address            = google_compute_global_address.main.id
  target                = google_compute_target_http_proxy.http.id
  port_range            = "80"
  load_balancing_scheme = "EXTERNAL_MANAGED"
}
