import { FlightStoreSelectorService } from './store/flight-store-selector.service';
import { RouterModule } from '@angular/router';
import { FlightStoreService } from './store/flight-store.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, NgrxAppStoreModule } from 'ngrx-app-store';
import { FlightItemComponent } from './components/flight-item/flight-item.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FlightComponent } from './containers/flight/flight.component';

import { createGenericReducer } from "ngrx-app-store";
import { SortFlights } from './services/flight.service';
import { FlightRoutingModule } from './flight-routing.module';
import { Routes } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
const routes: Routes = [

  {
    path: '',
    component: FlightComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("flights", createGenericReducer),
    StoreModule.forRoot({}),
    NgrxAppStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: [
    FlightItemComponent,
    FlightListComponent,
    FlightComponent,
    SortFlights
  ],
  providers: [
    FlightStoreService,
    FlightStoreSelectorService
  ],
  exports: [FlightComponent]
})
export class FlightModule { }
