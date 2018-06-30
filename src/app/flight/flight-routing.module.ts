import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './containers/flight/flight.component';
const routes: Routes = [

  {
    path: '',
    component: FlightComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class FlightRoutingModule { }
