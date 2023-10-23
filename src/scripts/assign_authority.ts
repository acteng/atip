// When authority boundaries change, use this script to reassign the
// authority_or_region field in all_scheme_data.geojson to the smallest
// boundary fully containing the scheme. It's best-effort -- failures are
// ignored.
//
// To use this, copy all_scheme_data.geojson as all_scheme_data_input.geojson,
// 'npm run assign-authority', then use all_scheme_data_output.geojson.

import * as fs from "fs";
import { findSmallestAuthority, fixBoundaries } from "../boundaries.js";

main();

function main() {
  let authorities = fixBoundaries(
    JSON.parse(
      fs.readFileSync("assets/authorities.geojson", { encoding: "utf8" })
    )
  );

  let gj = JSON.parse(
    fs.readFileSync("all_scheme_data_input.geojson", { encoding: "utf8" })
  );
  // Group features by scheme_reference
  let featuresPerScheme: { [key: string]: any[] } = {};
  for (let scheme of Object.keys(gj.schemes)) {
    featuresPerScheme[scheme] = [];
  }
  for (let f of gj.features) {
    featuresPerScheme[f.properties.scheme_reference].push(f);
  }

  // Assign the smallest authority
  for (let [scheme, features] of Object.entries(featuresPerScheme)) {
    let authority = findSmallestAuthority(features, authorities);
    let prev = gj.schemes[scheme].authority_or_region;
    if (!authority) {
      console.log(
        `Couldn't assign a boundary for ${scheme}. Leaving as ${prev}.`
      );
      continue;
    }

    if (prev != authority) {
      console.log(`For ${scheme}, changing from ${prev} to ${authority}`);
      gj.schemes[scheme].authority_or_region = authority;
    }
  }

  fs.writeFileSync("all_scheme_data_output.geojson", JSON.stringify(gj));
}
