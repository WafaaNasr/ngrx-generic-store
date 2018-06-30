import { FlightStatus } from "./enums";


export class FlightEntity {
  flightNo: number;
  id: string;
  flightNumber: string;
  flightStatus: FlightStatus;
  isDeleted: boolean;
}
