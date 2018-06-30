import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Flight } from '../../model/flight';
import { FlightStatus } from '../../model/enums';

@Component({
  selector: 'lib-flight-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './flight-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FlightItemComponent implements OnInit {
  @Input() flight: Flight;

  constructor() { }

  ngOnInit() {
  }
  getStatusColor(): string {
    switch (this.flight.status) {
      case FlightStatus.Danger:
        return "red";

      case FlightStatus.Normal:
        return "green";

      case FlightStatus.Warning:
        return "yellow";

    }
  }
}
