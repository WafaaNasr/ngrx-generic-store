import { FlightEntity } from './../model/flight-entity';
import { ReducersManager } from 'ngrx-app-store';

export const flightReducer = new ReducersManager<FlightEntity>();
