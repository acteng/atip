#!/bin/bash

set -e
npm run build
mv dist atip
aws s3 sync --delete atip s3://atip.uk/atip
