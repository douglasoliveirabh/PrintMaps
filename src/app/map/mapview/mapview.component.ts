import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MapOptions } from 'src/app/shared/models/map-options';
import { MapBox } from 'src/app/shared/models/map-box';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.less']
})
export class MapviewComponent implements OnInit, AfterViewInit {


  @ViewChild('mapContainer', {static: false})
  mapContainer: ElementRef;

  map: MapBox;
  options: MapOptions = new MapOptions();

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    debugger;
    const htmlElement = this.mapContainer.nativeElement as HTMLElement;
    this.map = new MapBox(environment.mapbox.accessToken, 'mapContainer', this.options);
  }




  onOptionsChanged(mapOptions: MapOptions){
    console.log(mapOptions);
  }

}
