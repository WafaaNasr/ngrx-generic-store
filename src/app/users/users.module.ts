
import { UserListGuard } from "./user-list.guard";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "../../environments/environment";

import { UserStoreSelectorService, UserStoreDispatcherService } from "./users-store/user.store.service";
import { UserListComponent } from "./user-list/user-list.component";


import { NgrxAppStoreModule, StoreModule } from "ngrx-app-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { createGenericReducer } from "ngrx-app-store";
import { UserEntity } from "./users-store/models/user";
import * as userActions from "ngrx-app-store";
import { userReducer } from "./users-store/users-store.reducers";

export const routes: Routes = [
  {
    path: "",
    component: UserListComponent,
    canActivate: [UserListGuard]
  },
  
];

export const factoryFn = () => {
  const res = () => {
    //createGenericReducer<UserEntity>()
  };
  //return createGenericReducer<UserEntity>(UserEntity).reducerFn;
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("users",createGenericReducer<UserEntity>(UserEntity).reducerFn),
     //StoreModule.forFeature("users",userReducer.CreateReducer),
    StoreModule.forRoot({}),
    NgrxAppStoreModule,
  !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: [UserListComponent],
  providers: [UserListGuard, UserStoreSelectorService, UserStoreDispatcherService],
  exports: []
})
export class UsersModule { }
/*Keep in mind that this is a simple example, with a single reducer
sand a simple state for our feature. The reducer can be of type
ActionReducerMap, and have multiple sub-states and reducers. */
