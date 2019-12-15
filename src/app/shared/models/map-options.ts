import { MapStyle } from './map-style';
import { MapStyles } from '../data/map-styles';

export class MapOptions {
  public width: number;
  public height: number;
  public dpi: number;
  public format: 'png' | 'pdf';
  public latitude: number;
  public longitude: number;
  public style: MapStyle;
  public geoJson: any;

  constructor() {
    this.width = 297;
    this.height = 210;
    this.dpi = 300;
    this.format = 'png';
    this.style = MapStyles[0];
    this.geoJson = null;
  }
}
