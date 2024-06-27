import type { FeatureUnion } from "types";
import { interventionName } from "lib/sidebar/scheme_data";

// The draw code should be agnostic to the feature properties that differ by
// schema. Start centralizing the logic here, so it's easy for other users to
// override.

export let cfg = {
  interventionName: (feature: FeatureUnion) => {
    return interventionName(feature);
  },
};
