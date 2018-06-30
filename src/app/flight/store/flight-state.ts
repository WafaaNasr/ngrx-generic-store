import { Flight } from './../model/flight';
import { StoreStateFactory, IBaseEntityState } from 'ngrx-app-store';


export interface FlightState extends IBaseEntityState<Flight> {
}

// export const flightStateFactory = new StoreStateFactory<Flight>();

// export const flightAdapter = flightStateFactory.GetEntityAdapter();

// export const baseflightInitialState = flightAdapter.getInitialState();



