import { FlightComponent } from './flight/containers/flight/flight.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { NgrxAppStoreModule } from "ngrx-app-store";
import { UsersModule } from './users/users.module';
import { Routes, RouterModule } from "@angular/router";
import { Store, NgrxAppStoreModule, createGenericReducer } from 'ngrx-app-store';
import { FlightModule } from './flight/flight.module';
import { UserEntity } from './users/users-store/models/user';

export const routes: Routes = [

  {
    path: "users",
    loadChildren: "./users/users.module#UsersModule" // => Works also
  },
  {
    path: "flight",
    //loadChildren: "./flight/flight.module#FlightModule"
    component: FlightComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UsersModule,
    FlightModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(store: Store<any>) {
    store.select(s => s).subscribe(console.log.bind(console));
  }
}
