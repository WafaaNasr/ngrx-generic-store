import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreRouterConnectingModule,
  ],
  declarations: [],
  exports:[HttpClientModule]
})
export class NgrxAppStoreModule { }
