import { Observable } from 'rxjs';
import { FlightStoreSelectorService } from './flight-store-selector.service';
import { Injectable } from '@angular/core';
import { StoreService, AppActionDispatcher, Store } from 'ngrx-app-store';
import { Flight } from '../model/flight';
import { FlightState } from './flight-state';
import * as FlightActions from 'ngrx-app-store';

@Injectable({
  providedIn: 'root'
})
export class FlightStoreService extends StoreService<Flight, FlightState> {

  constructor(store: Store<FlightState>, appActionDispacther: AppActionDispatcher<Flight>, private storeSvc: FlightStoreSelectorService) {
    super(store, appActionDispacther);
  }

  cLoadAction(api: string) {
    this.dispatchAction(new FlightActions.DefaultLoad<Flight>(api));
  }


  dispatchLoadAction(url) {
    this.dispatchAction(new FlightActions.DefaultLoad<Flight>(url));
  }

  dispatchUpdateAction(url, flight) {
    this.dispatchAction(new FlightActions.DefaultUpdate<Flight>(url, flight));
  }

  dispatchCreateAction(url, flight) {
    this.dispatchAction(new FlightActions.DefaultCreate<Flight>(url, flight));
  }

  dispatchRemoveAction(url, flight) {
    this.dispatchAction(new FlightActions.DefaultRemove<Flight>(url, flight));
  }


  getError(): any {
    return this.store.select(this.storeSvc.error);
  }
  getIsLoading(): any {
    return this.store.select(this.storeSvc.isLoading);
  }

  getFlights(): Observable<Array<Flight>> {
    return this.storeSvc.getAll(this.storeSvc.selectors.selectAll);
    //this.storeSvc.getAll(this.storeSvc.selectors.selectAll).subscribe((value)=>{debugger; return value;});
  }
}
