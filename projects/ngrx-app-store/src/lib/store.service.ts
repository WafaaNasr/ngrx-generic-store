import { AppBaseAction } from './actions/app-base-action';
import { AppActionDispatcher } from './actions/app-action-dispatcher';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


/**
 * StoreService is used for dispatching actions of type "AppBaseAction".
 * Usage: inject the service in your ctor and pass the two Generics 
 * { V: is the AppState type and T: is for the class that defines the shape of the state's entity  }
 */
export class StoreService<T, V> {
  constructor(public store: Store<V>, public appActionDispatch: AppActionDispatcher<T>) { }


  public dispatchAction(action: AppBaseAction<T>) {
    this.store.dispatch(action);
    this.appActionDispatch.dispatch(action, this.store);
  }
}
