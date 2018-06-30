import { Observable } from 'rxjs/Observable';
import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightStatus } from '../model/enums';

@Pipe({ name: 'sortFlights' })
export class SortFlights implements PipeTransform {
    transform(value: Flight[]): Flight[] {
        const result = value.sort((a, b) => {
            if (a.status > b.status && a.status != FlightStatus.Completed) {
                return - 1;
            } else if (a.status < b.status) {
                return + 1;
            } else{
                return 0
            }
        });

        return result;
    }
}