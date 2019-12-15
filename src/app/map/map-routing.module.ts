import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapviewComponent } from './mapview/mapview.component';


const routes: Routes = [
  {path: '', component: MapviewComponent, pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }

