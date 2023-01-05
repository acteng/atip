#!/bin/bash

set -e
npm run build
# DON'T add --delete, because it nukes route-snappers
aws s3 sync dist s3://atip.uk/
# Could do this for cleanup. Be careful, do manually
# aws s3 sync --dry --delete dist/assets s3://atip.uk/assets/

# If ever basePath or something else gets cached in a weird way, just delete
# node_modules/ entirely. vite cache has some problems.

# Probably need to invalidate the CDN too. Fix IAM permissions and script it.
# Goto https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=us-east-2#/distributions/E2WYSUEPD3ZOEO/invalidations/create and just do '/*'
