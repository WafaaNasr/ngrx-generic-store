import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../model/flight';
import { DisplayStatus } from '../../model/enums';


@Component({
  selector: 'lib-flight-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './flight-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FlightListComponent implements OnInit {

  isExpanded: boolean;
  isShown: boolean;

  displayStatus = DisplayStatus;
  @Input("flights") flights$: Observable<Flight[]>;
  //myFights$: any;

  constructor() {
    this.isExpanded = true;
    this.isShown = true;
  }
  ngOnInit() {
   // this.myFights$ = this.http.get('http://localhost:2500/flights')

  }
  setDispalyStatus(status) {
    switch (status) {
      case DisplayStatus.Collapse:
        {
          this.isExpanded = false;
        }
        break;
      case DisplayStatus.Expand:
        {
          this.isExpanded = true;
        }
        break;
      case DisplayStatus.Close:
        {
          this.isShown = false;
        }
        break;
      case DisplayStatus.Show:
        {
          this.isShown = true;
        }
        break;
    }
  }

}
