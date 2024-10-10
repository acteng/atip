import type { Schemes } from "scheme-sketcher-lib/draw/types";
import type { InterventionProps, SchemeData } from "types";

export function getAllSketches(): Schemes<InterventionProps, SchemeData> {
  const sketchGJs: Schemes<InterventionProps, SchemeData>[] = [];
  for (const key in window.localStorage) {
    try {
      const storedObject = JSON.parse(window.localStorage[key]);
      console.log(storedObject);
      if (objectIsSkecth(storedObject)) {
        Object.keys(storedObject.schemes).forEach((schemeId) => {
          const scheme = storedObject.schemes[schemeId];
          scheme.browse =
            scheme.browse ||
            Object.assign(scheme.browse, {
              authority_or_region: key,
              capital_scheme_id: schemeId,
            });
        });
        sketchGJs.push(storedObject);
      }
    } catch {
      console.log(`Object at ${key} not parseable JSON`);
    }
  }

  let result: Schemes<InterventionProps, SchemeData> = {
    type: "FeatureCollection",
    features: [],
    schemes: {},
  };

  sketchGJs.forEach((sketchGJ) => {
    result.features = result.features.concat(sketchGJ.features);
    Object.keys(sketchGJ.schemes).forEach((schemeId) => {
      result.schemes[schemeId] = sketchGJ.schemes[schemeId];
    });
  });

  return result;
}

function objectIsSkecth(object: any) {
  return (
    object !== undefined &&
    object.type === "FeatureCollection" &&
    Array.isArray(object.features) &&
    typeof object.schemes === "object"
  );
}
