import type { Map } from "maplibre-gl";

export class LayerHelper {
  id: string;
  defaultLayer: any;
  changedValues: Array<string> = [];

  constructor(layer: any) {
    this.id = layer.id;
    this.defaultLayer = JSON.parse(JSON.stringify(layer));
  }

  setProperty(map: Map, propertyName: string, value: string) {
    map.setPaintProperty(this.id, propertyName, value);
    this.changedValues.push(propertyName);
  }

  returnToDefaultPaintValues(map: Map) {
    this.changedValues.forEach((propertyName) => {
      map.setPaintProperty(
        this.id,
        propertyName,
        this.defaultLayer.paint[propertyName]
      );
    });
    this.changedValues = [];
  }
}
