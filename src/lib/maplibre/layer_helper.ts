import type { Map } from "maplibre-gl";

export class LayerHelper {
    id: string;
    defaultPaintValues: Array<[string, string]>;

    constructor(id: string, defaultPaintValues: Array<[string, string]>) {
        this.id = id;
        this.defaultPaintValues = defaultPaintValues
    }

    setProperty(map: Map, propertyName: string, value: string) {
        map.setPaintProperty(this.id, propertyName, value);
    }

    returnToDefaultPaintValues(map: Map) {
        this.defaultPaintValues.forEach(([propertyName, value]) => {
            map.setPaintProperty(this.id, propertyName, value);
        });
    }
}