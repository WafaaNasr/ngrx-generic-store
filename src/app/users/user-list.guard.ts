import { Store, DefaultLoad , StoreService} from "ngrx-app-store";
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserEntity } from "./users-store/models/user";
import { UserState } from "./users-store/user-store.state";

@Injectable()
export class UserListGuard implements CanActivate {
  constructor(private store: Store<UserState>, private storeSvc: StoreService<UserEntity, UserState>) { }

  // The interesting thing is that the route
  //  guard will also make an API request if we
  // currently have no data in the Store - and populate the store with the data before we finish transitioning to the route.


  /*as long as I haven’t refreshed the app the data
   will still be in the Store, and skip the API request.
    This is neat! */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    this.storeSvc.dispatchAction(new DefaultLoad("http://localhost:2500/flights"));
    return true;
  }
}
// Reference:
// https://toddmotto.com/preloading-ngrx-store-route-guards
