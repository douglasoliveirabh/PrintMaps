import * as mapboxgl from 'mapbox-gl';
import { MapOptions } from './map-options';

export class MapBox {

  private instance: mapboxgl.Map;
  private options: MapOptions;

  constructor(accessToken: string, mapContainer: string | HTMLElement, options: MapOptions){
      mapboxgl.accessToken = accessToken;
      this.options = options;
      this.instance = new mapboxgl.Map({
        container: mapContainer,
        center: [0, 0],
        zoom: 0.5,
        pitch: 0,
        style: this.options.style.uri
      });
  }


}
