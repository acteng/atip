terraform {
  backend "gcs" {
    bucket = "dft-rlg-schemes-gis-dev-tf-backend"
    prefix = "service"
  }
}

provider "google" {
  project = local.project
}

locals {
  env     = terraform.workspace
  project = "${var.project_prefix}-${local.env}"
  config = {
    dev = {
      use_iap   = false
      keep_idle = false
      domain    = "dev.plan.activetravelengland.gov.uk"
    }
    test = {
      use_iap   = false
      keep_idle = false
      domain    = "test.plan.activetravelengland.gov.uk"
    }
    prod = {
      use_iap   = false
      keep_idle = false
      domain    = "plan.activetravelengland.gov.uk"
    }
  }
}


data "terraform_remote_state" "docker_repository" {
  backend = "gcs"
  config = {
    bucket = "${var.project_prefix}-dev-tf-backend"
    prefix = "docker-repository"
  }
}

data "terraform_remote_state" "storage_bucket" {
  backend = "gcs"
  config = {
    bucket = "${var.project_prefix}-dev-tf-backend"
    prefix = "storage-bucket"
  }
  workspace = local.env
}

resource "google_project_service" "run" {
  project = local.project
  service = "run.googleapis.com"
}

module "application" {
  source                    = "./application"
  project                   = local.project
  region                    = var.location
  docker_repository_project = data.terraform_remote_state.docker_repository.outputs.project
  docker_repository_url     = data.terraform_remote_state.docker_repository.outputs.url
  keep_idle                 = local.config[local.env].keep_idle
  gcs_bucket_name           = data.terraform_remote_state.storage_bucket.outputs.bucket_name
  use_iap                   = local.config[local.env].use_iap

  depends_on = [
    google_project_service.run,
  ]
}

module "github_action_deploy" {
  source                       = "./github-action-deploy"
  project                      = local.project
  docker_repository_project    = data.terraform_remote_state.docker_repository.outputs.project
  cloud_run_service_account_id = module.application.service_account_id
}

module "load_balancer" {
  source             = "./load-balancer"
  project            = local.project
  region             = var.location
  domain             = local.config[local.env].domain
  security_policy_id = module.web_application_firewall.security_policy_id
}

import {
  id = "projects/${local.project}/global/addresses/plan-${terraform.workspace}"
  to = module.load_balancer.google_compute_global_address.main
}

import {
  id = "projects/${local.project}/global/sslCertificates/plan"
  to = module.load_balancer.google_compute_managed_ssl_certificate.main
}

import {
  id = "projects/${local.project}/regions/${var.location}/networkEndpointGroups/plan"
  to = module.load_balancer.google_compute_region_network_endpoint_group.main
}

import {
  id = "projects/${local.project}/global/backendServices/plan"
  to = module.load_balancer.google_compute_backend_service.main
}

import {
  id = "projects/${local.project}/global/urlMaps/plan"
  to = module.load_balancer.google_compute_url_map.main
}

import {
  id = "projects/${local.project}/global/sslPolicies/plan"
  to = module.load_balancer.google_compute_ssl_policy.main
}

import {
  id = "projects/${local.project}/global/targetHttpsProxies/plan-https"
  to = module.load_balancer.google_compute_target_https_proxy.https
}

import {
  id = "projects/${local.project}/global/forwardingRules/plan-https"
  to = module.load_balancer.google_compute_global_forwarding_rule.https
}

import {
  id = "projects/${local.project}/global/urlMaps/plan-https-redirect"
  to = module.load_balancer.google_compute_url_map.https_redirect
}

import {
  id = "projects/${local.project}/global/targetHttpProxies/plan-http"
  to = module.load_balancer.google_compute_target_http_proxy.http
}

import {
  id = "projects/${local.project}/global/forwardingRules/plan-http"
  to = module.load_balancer.google_compute_global_forwarding_rule.http
}

module "web_application_firewall" {
  source  = "./web-application-firewall"
  project = local.project
}

import {
  id = "projects/${local.project}/global/securityPolicies/plan"
  to = module.web_application_firewall.google_compute_security_policy.main
}
