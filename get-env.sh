#!/bin/bash

# Gets the local environment variables from Bitwarden

set -eo pipefail

cat <<EOF >.env
VITE_MAPTILER_API_KEY=$(bw get password inspectorate-tools-maptiler-api-key-local)
VITE_RESOURCE_BASE=/data
VITE_MIMIC_GCP_LOCALLY=false
EOF
