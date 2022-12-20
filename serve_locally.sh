#!/bin/bash

wasm-pack build --release --target web route-snapper/route-snapper-js && python3 -m http.server --directory .
