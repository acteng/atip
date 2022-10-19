#!/bin/bash

wasm-pack build --dev --target web route-snapper && python3 -m http.server --directory .
