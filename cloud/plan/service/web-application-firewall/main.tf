resource "google_compute_security_policy" "main" {
  name    = "plan"
  project = var.project

  rule {
    description = "Block malicious IPs"
    action      = "deny(403)"
    priority    = 0
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = ["45.159.248.69"]
      }
    }
  }

  rule {
    description = "SQL injection"
    action      = "deny(403)"
    priority    = 1000
    match {
      expr {
        expression = "evaluatePreconfiguredWaf('sqli-v33-stable', {'sensitivity': 1})"
      }
    }
  }

  rule {
    description = "Cross-site scripting"
    action      = "deny(403)"
    priority    = 1001
    match {
      expr {
        expression = "evaluatePreconfiguredWaf('xss-v33-stable', {'sensitivity': 1})"
      }
    }
  }

  rule {
    description = "Local file inclusion"
    action      = "deny(403)"
    priority    = 1002
    match {
      expr {
        expression = "evaluatePreconfiguredWaf('lfi-v33-stable', {'sensitivity': 1})"
      }
    }
  }

  rule {
    description = "Remote file inclusion"
    action      = "deny(403)"
    priority    = 1003
    match {
      expr {
        expression = "evaluatePreconfiguredWaf('rfi-v33-stable', {'sensitivity': 1})"
      }
    }
  }

  rule {
    description = "Remote code execution"
    action      = "deny(403)"
    priority    = 1004
    match {
      expr {
        expression = "evaluatePreconfiguredWaf('rce-v33-stable', {'sensitivity': 1})"
      }
    }
  }

  rule {
    description = "Method enforcement"
    action      = "deny(403)"
    priority    = 1005
    match {
      expr {
        expression = "evaluatePreconfiguredWaf('methodenforcement-v33-stable', {'sensitivity': 1})"
      }
    }
  }

  rule {
    description = "Scanner detection"
    action      = "deny(403)"
    priority    = 1006
    match {
      expr {
        expression = "evaluatePreconfiguredWaf('scannerdetection-v33-stable', {'sensitivity': 1})"
      }
    }
  }

  rule {
    description = "Protocol attack"
    action      = "deny(403)"
    priority    = 1007
    match {
      expr {
        expression = "evaluatePreconfiguredWaf('protocolattack-v33-stable', {'sensitivity': 1})"
      }
    }
  }

  rule {
    description = "Session fixation attack"
    action      = "deny(403)"
    priority    = 1008
    match {
      expr {
        expression = "evaluatePreconfiguredWaf('sessionfixation-v33-stable', {'sensitivity': 1})"
      }
    }
  }

  rule {
    description = "default rule"
    action      = "allow"
    priority    = 2147483647
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = ["*"]
      }
    }
  }
}
