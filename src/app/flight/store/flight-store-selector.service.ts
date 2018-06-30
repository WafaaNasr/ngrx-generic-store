import { Flight } from './../model/flight';
import { Injectable } from '@angular/core';
import { StoreSelectors, Store, AppState, createFeatureSelector, createSelector, StoreStateFactory } from 'ngrx-app-store';
import { FlightState } from './flight-state';

@Injectable({
  providedIn: 'root'
})
export class FlightStoreSelectorService extends StoreSelectors {

  private flightStateFactory;
  private flightAdapter;
  private flightStateSelector;
  private baseflightInitialState;

  public selectors
  public currentFlightId;
  public isLoading;
  public error;
  public isExists;

  constructor(store: Store<AppState>) {
    super(store);
    this.flightStateFactory = new StoreStateFactory<Flight>();
    this.flightAdapter = this.flightStateFactory.GetEntityAdapter();
    this.baseflightInitialState = this.flightAdapter.getInitialState();
    this.flightStateSelector = createFeatureSelector<FlightState>('flights');
    
    this.selectors = this.flightAdapter.getSelectors(this.flightStateSelector);
    this.currentFlightId = createSelector(this.flightStateSelector, this.flightStateFactory.selectedEntityId);
    this.isLoading = createSelector(this.flightStateSelector, this.flightStateFactory.selectIsLoading);
    this.error = createSelector(this.flightStateSelector, this.flightStateFactory.selectError);
  }

}

