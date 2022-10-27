#!/bin/bash

if ! [ -f route-snapper/bristol.bin ]; then
	curl http://play.abstreet.org/dev/data/system/gb/bristol/maps/east.bin.gz -o route-snapper/bristol.bin.gz
	gunzip route-snapper/bristol.bin.gz
fi

wasm-pack build --release --target web route-snapper && python3 -m http.server --directory .
