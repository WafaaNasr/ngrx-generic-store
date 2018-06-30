import { FlightModule } from './flight.module';

describe('FlightModule', () => {
  let flightModule: FlightModule;

  beforeEach(() => {
    flightModule = new FlightModule();
  });

  it('should create an instance', () => {
    expect(flightModule).toBeTruthy();
  });
});
