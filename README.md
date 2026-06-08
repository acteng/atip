# Plan Your Active Travel Schemes

This repository contains the Scheme Sketcher and Scheme Browser, two tools for mapping active travel schemes and viewing them alongside contextual layers. The tools are developed by the Alan Turing Institute in collaboration with Active Travel England.

(Note this project used to be called ATIP, Active Travel Infrastructure Platform. This repo retains the old name.)

## Prerequisites

1. Install Node 22
1. Install [Bitwarden CLI](https://bitwarden.com/help/cli/#download-and-install)
1. Install Google Cloud CLI and authenticate using ADCs:
   ```bash
   gcloud auth application-default login
   ```

## Setup

If you have an ATE Bitwarden account you'll need to login via the CLI and configure the application's environment
variables by fetching secrets from Bitwarden.

```bash
./get-env.sh
```

You can also configure the application locally by setting the following environment variables:

| Name                   | Value                                                                                                      |
|------------------------|------------------------------------------------------------------------------------------------------------|
| VITE_MAPTILER_API_KEY  | Maptiler API key                                                                                           |
| VITE_RESOURCE_BASE     | Sets the path for all resource requests.                                                                   |
| VITE_MIMIC_GCP_LOCALLY | Boolean value that configures whether to show private layers locally if set to true and local files exist. |

## Running locally

### Build svelte app

1. Install dependencies:

   ```bash
   npm install
   ```

1. Build web assets

   ```bash
   npm run setup-govuk
   ```

1. Build the svelte app

   ```bash
   npm run build
   ```

### Run express app

1. With the svelte app built move into the `backend` directory

   ```bash
   cd backend
   ```

1. Copy over the build svelte app

   ```bash
   cp -r ../dist .
   ```

1. Install backend dependencies

   ```bash
   npm install
   ```

1. Authenticate with Google
   
   ```bash
   gcloud auth application-default login
   ```

1. Run express app

   ```bash
   GCS_BUCKET=dft-rlg-atip-dev USE_IAP=false npm start
   ```

1. Open http://localhost:8080

## Running locally using Docker

To run the server as a container:

1. Build the svelte app

   ```bash
   npm install && npm run build
   ```

2. Copy over the built svelte app

   ```bash
   cp -r dist backend/
   ```

1. Build the Docker image

   ```bash
   docker build -t plan .
   ```

1. Authenticate with Google
   
   ```bash
   gcloud auth application-default login
   ```
   
1. Run the Docker image

   ```bash
   ADC=~/.config/gcloud/application_default_credentials.json

   docker run --rm -it \
     -e GCS_BUCKET=dft-rlg-atip-dev \
     -e USE_IAP=false \
     -e GOOGLE_APPLICATION_CREDENTIALS=/tmp/keys/google_credentials.json \
     -v ${ADC}:/tmp/keys/google_credentials.json:ro \
     -p 8080:8080 \
      plan
   ```
   
1. Open http://127.0.0.1:8080


### Developing with Vite

When developing locally you may wish to use Vite to run the server locally for hot reloading.
In order to ensure you can pull assets from GCP storage you will need to run the express app.

1. Authenticate with Google
   
   ```bash
   gcloud auth application-default login
   ```

1. Run express app

   ```bash
   cd backend
   
   GCS_BUCKET=dft-rlg-atip-dev USE_IAP=false npm start &
   ```

1. Run Vite development server

   ```bash
   cd ..
   
   npm run dev
   ```

1. Open http://localhost:5173

1. After interrupting Vite tidy up the background Express app

   ```bash
   # presuming the job ID is 1
   # you can check this by running $ jobs
   kill %1
   ```

## Usage

The development version is available for use at <https://acteng.github.io/atip>. Note this is not a production service and we make no guarantees about the site's uptime or about backwards compatibility of sketch files.

See the [developer guide](docs/developer_guide.md) if you want to work on the code.

### Usage in other places

You can set up the Scheme Sketcher for another country, using [the common library](https://github.com/acteng/scheme-sketcher-lib). You'll need technical experience to do this. Please [file an issue](https://github.com/acteng/atip/issues/new) to start a conversation.
