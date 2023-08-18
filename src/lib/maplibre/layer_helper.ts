import type { Map } from "maplibre-gl";

export class LayerHelper {
  id: string;
  defaultPaintValues: Array<[string, string]>;

  constructor(layer: any) {
    this.id = layer.id;
    this.defaultPaintValues = this.getLayerValues(layer);
  }

  getLayerValues(layer: any): Array<[string, string]> {
    return Object.keys(layer.paint ? layer.paint : {}).map(
      (paintPropertyKey) => {
        //@ts-ignore Not sure how to convince ts that layer.paint will contain strings
        return [paintPropertyKey, layer.paint[paintPropertyKey]];
      }
    );
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
