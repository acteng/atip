import type {
    Schemes
} from "scheme-sketcher-lib/draw/types";

export function getAllSketches(): Schemes {
    const sketchGJs: Schemes[] = [];
    for (const key in window.localStorage) {
        try {
            const storedObject = JSON.parse(window.localStorage[key]);
            if (objectIsSkecth(storedObject)) {
                sketchGJs.push(storedObject);
            }
        } catch {
            console.log(`Object at ${key} not parseable JSON`);
        }
    }
    let result: Schemes = {
        type: "FeatureCollection",
        features: [],
        schemes: {},
    };

    sketchGJs.forEach(sketchGJ => {
        result.features = result.features.concat(sketchGJ.features);
        Object.keys(sketchGJ.schemes).forEach(schemeId => {
            result.schemes[schemeId] = sketchGJ.schemes[schemeId];
        });
    });

    return result;
}

function objectIsSkecth(object: any) {
    return object !== undefined
        && object.type === "FeatureCollection"
        && Array.isArray(object.features)
        && typeof object.schemes === "object";
}