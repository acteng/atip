import type { Schemes } from "scheme-sketcher-lib/draw/types";
import type { InterventionProps, SchemeData } from "types";

export function getAllSketches(): Schemes<InterventionProps, SchemeData> {
  const sketchGJs: Schemes<InterventionProps, SchemeData>[] = [];
  for (const key in window.localStorage) {
    const storedStringOrObject = window.localStorage[key];
    try {
      const storedObject =
        typeof storedStringOrObject === "string"
          ? JSON.parse(storedStringOrObject)
          : storedStringOrObject;
      if (objectIsSkecth(storedObject)) {
        sketchGJs.push(
          getAugmentedSketchObjectForBrowsePage(storedObject, key),
        );
      }
    } catch (e) {
      console.log(`Cannot parse string at local storage[${key}] due to: ${e}`);
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

function getAugmentedSketchObjectForBrowsePage(
  object: any,
  authorityName: string,
) {
  Object.keys(object.schemes).forEach((schemeId) => {
    const scheme = object.schemes[schemeId];
    scheme.browse = scheme.browse || {
      authority_or_region: authorityName,
      capital_scheme_id: schemeId,
    };
  });
  return object;
}

function objectIsSkecth(object: any) {
  return (
    object !== undefined &&
    object.type === "FeatureCollection" &&
    Array.isArray(object.features) &&
    typeof object.schemes === "object"
  );
}
