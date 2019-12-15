import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapviewComponent } from './mapview/mapview.component';
import { SidebarMapviewComponent } from './sidebar-mapview/sidebar-mapview.component';
import { MapRoutingModule } from './map-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MapviewComponent,
    SidebarMapviewComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    FormsModule
  ],
  exports: [
    MapviewComponent
  ]
})
export class MapModule { }
