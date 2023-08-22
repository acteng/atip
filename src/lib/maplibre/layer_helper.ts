import type { LayerSpecification, Map } from "maplibre-gl";

export class LayerHelper {
  id: string;
  defaultLayer: any;
  changedProperties: Array<string> = [];

  constructor(layer: LayerSpecification) {
    this.id = layer.id;
    this.defaultLayer = JSON.parse(JSON.stringify(layer));
  }

  setProperty(map: Map, propertyName: string, value: string) {
    map.setPaintProperty(this.id, propertyName, value);
    this.changedProperties.push(propertyName);
  }

  returnToDefaultPaintValues(map: Map) {
    this.changedProperties.forEach((propertyName) => {
      map.setPaintProperty(
        this.id,
        propertyName,
        this.defaultLayer.paint[propertyName]
      );
    });
    this.changedProperties = [];
  }
}
