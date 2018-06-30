import { Flight } from './../model/flight';
import { ReducersManager } from "ngrx-app-store/lib/reducers-manager";
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from 'ngrx-app-store';

//export const flightReducer = new ReducersManager<Flight>();

// export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

// export const reducerProvider = [
//   { provide: reducerToken, useValue: flightReducer.CreateReducer }
// ];


// export const func = flightReducer.CreateReducer;