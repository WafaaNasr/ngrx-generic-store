import { FlightStatus } from './../../model/enums';
import { FlightStoreService } from './../../store/flight-store.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Flight } from '../../model/flight';

@Component({
  selector: 'lib-flight',
  templateUrl: './flight.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FlightComponent implements OnInit, OnDestroy {

  flights$: Observable<Flight[]>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private flightStoreService: FlightStoreService) { }

  ngOnInit() {
    this.flightStoreService.dispatchLoadAction('http://localhost:2500/flights');
    this.flights$ = this.flightStoreService.getFlights();
    this.loading$ = this.flightStoreService.getIsLoading();
    this.error$ = this.flightStoreService.getError();

    // let theLoop: (i: number, delay?) => void = (i: number, delay = 3000) => {
    //   if (i % 2 === 0) {
    //     delay = 1500;
    //   }

    //   setTimeout(() => {
    //     this.createFlight();
    //     if (--i) {
    //       theLoop(i);
    //     }
    //   }, delay);
    // };

    // theLoop(100);
  }

  createFlight() {

    const flight = new Flight();
    flight.completed = true;
    flight.title = 'asdasd';
    flight.flightNumber = '125869';
    const x = Math.floor(Math.random() * 4) + 1;
    let status = FlightStatus.Normal;
    switch (x) {
      case 1:
        status = FlightStatus.Normal;
        break;
      case 2:
        status = FlightStatus.Warning;
        break;
      case 3:
        status = FlightStatus.Danger;
        break;

      default:
        status = FlightStatus.Normal;
        break;
    }

    flight.status = status;
    flight.tail = "521487";
    flight.dep = "CAOL";
    flight.dest = "PLOU";
    flight.ctot = "sdkui";
    flight.std = "sd9ddr";
    this.flightStoreService.dispatchCreateAction('http://localhost:2500/flights', flight);

  }

  onCreateFlight() {
    const flight = new Flight();
    flight.completed = true;
    flight.title = 'asdasd';
    flight.flightNumber = '125869';
    flight.status = FlightStatus.Warning;
    flight.tail = "521487";
    flight.dep = "CAOL";
    flight.dest = "PLOU";
    flight.ctot = "sdkui";
    flight.std = "sd9ddr";
    this.flightStoreService.dispatchCreateAction('http://localhost:2500/flights', flight);
  }

  onRemoveFlight(id) {
    this.flightStoreService.dispatchRemoveAction('http://localhost:2500/flights/' + id, id);
  }

  onUpdateFlight(event) {
    event.title = 'Updated';
    this.flightStoreService.dispatchUpdateAction('http://localhost:2500/flights/' + event.id, event);
  }
  ngOnDestroy(): void {
    this.flights$ = null;
  }

}