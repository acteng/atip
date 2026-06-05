# Plan Your Active Travel Schemes

This repository contains the Scheme Sketcher and Scheme Browser, two tools for mapping active travel schemes and viewing them alongside contextual layers. The tools are developed by the Alan Turing Institute in collaboration with Active Travel England.

(Note this project used to be called ATIP, Active Travel Infrastructure Platform. This repo retains the old name.)

## Prerequisites

1. Install Node 22
1. Install Google Cloud CLI and authenticate using ADCs:
   ```bash
   gcloud auth application-default login
   ```

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

1. Run express app

   ```bash
   USE_IAP=false npm start
   ```

1. Open http://localhost:8080


## Usage

The development version is available for use at <https://acteng.github.io/atip>. Note this is not a production service and we make no guarantees about the site's uptime or about backwards compatibility of sketch files.

See the [developer guide](docs/developer_guide.md) if you want to work on the code.

### Usage in other places

You can set up the Scheme Sketcher for another country, using [the common library](https://github.com/acteng/scheme-sketcher-lib). You'll need technical experience to do this. Please [file an issue](https://github.com/acteng/atip/issues/new) to start a conversation.
