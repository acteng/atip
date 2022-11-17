#!/bin/bash

wasm-pack build --release --target no-modules route-snapper && python3 -m http.server --directory .
