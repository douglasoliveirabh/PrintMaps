import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MapStyle } from 'src/app/shared/models/map-style';
import { MapStyles } from 'src/app/shared/data/map-styles';
import { MapOptions } from 'src/app/shared/models/map-options';
import { DOMParser } from 'xmldom';
const toGeoJSON  = require('@mapbox/togeojson');


@Component({
  selector: 'app-sidebar-mapview',
  templateUrl: './sidebar-mapview.component.html',
  styleUrls: ['./sidebar-mapview.component.less']
})
export class SidebarMapviewComponent implements OnInit, OnDestroy {


  constructor() { }

  protected mapStyles: MapStyle[] = MapStyles;
  public mapOptions: MapOptions = new MapOptions();

  @Output()
  optionsChanged: EventEmitter<MapOptions> = new EventEmitter<MapOptions>();


  ngOnInit() {

    if (navigator.geolocation){
      const location = navigator.geolocation.getCurrentPosition((position) => {
        this.mapOptions.latitude = position.coords.latitude;
        this.mapOptions.longitude = position.coords.longitude;
      }, (error) => console.log(error));
    }


  }

  ngOnDestroy(): void {

  }

  onFileChange(evt: Event) {
    const reader = new FileReader();
    const target = evt.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      reader.readAsText(target.files[0], 'UTF-8');
      reader.onload = () => {
        const gpx = new DOMParser().parseFromString(reader.result);
        this.mapOptions.geoJson = toGeoJSON.gpx(gpx);
        this.modelChange();
      };
    }
  }

  modelChange() {
    this.optionsChanged.emit(this.mapOptions);
  }

}
