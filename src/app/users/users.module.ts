
import { UserListGuard } from "./user-list.guard";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { userReducer } from "./users-store/users-store.reducers";
import { environment } from "../../environments/environment";

import { UserStoreSelectorService, UserStoreDispatcherService } from "./users-store/user.store.service";
import { UserListComponent } from "./user-list/user-list.component";


import { NgrxAppStoreModule, StoreModule } from "ngrx-app-store";


export const routes: Routes = [
  {
    path: "",
    component: UserListComponent,
    canActivate: [UserListGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    StoreModule.forFeature("users", userReducer.CreateReducer),
    StoreModule.forRoot({}),
    NgrxAppStoreModule,
//    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: [UserListComponent],
  providers: [UserListGuard, UserStoreSelectorService, UserStoreDispatcherService],
  exports: []
})
export class UsersModule { }
/*Keep in mind that this is a simple example, with a single reducer
sand a simple state for our feature. The reducer can be of type
ActionReducerMap, and have multiple sub-states and reducers. */
