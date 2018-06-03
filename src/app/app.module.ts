import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { NgrxAppStoreModule } from "ngrx-app-store";
import { UsersModule } from './users/users.module';
import { Routes, RouterModule } from "@angular/router";
import { Store, NgrxAppStoreModule } from 'ngrx-app-store';


export const routes: Routes = [

  {
    path: "users",
     loadChildren: "./users/users.module#UsersModule" // => Works also
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    RouterModule.forRoot(routes),
    NgrxAppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(store: Store<any>) {
    store.select(s => s).subscribe(console.log.bind(console));
  }
}
