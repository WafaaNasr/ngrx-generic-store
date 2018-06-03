import { AppBaseAction } from './actions/app-base-action';
import { AppActionDispatcher } from './actions/app-action-dispatcher';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService<T, V> {
  constructor(public store: Store<V>, public appActionDispatch: AppActionDispatcher<T>) { }


  public dispatchAction(action: AppBaseAction<T>) {
    this.store.dispatch(action);
    this.appActionDispatch.dispatch(action, this.store);
  }
}
