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
        style: this.options.style,
        zoom: 13
      });
  }


}
