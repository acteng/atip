#!/bin/bash

set -ex

# Check for a file only in the root dir
if [[ ! -f playwright.config.js ]]; then
  echo "You must run this script from the root directory of the repo"
  exit
fi

read -p "Do you want to deploy to prod? (y/n)?" CONFIRM
if [ "$CONFIRM" != "y" ]; then
  exit
fi

# Build the app
npm ci
npm run setup-govuk
VITE_RESOURCE_BASE="https://plan.activetravelengland.gov.uk/data" npm run build

# Deploy to app engine
cd backend
rm -rf dist
cp -R ../dist .
gcloud app --project=dft-rlg-schemes-gis-prod deploy app_public_prod.yaml --quiet
