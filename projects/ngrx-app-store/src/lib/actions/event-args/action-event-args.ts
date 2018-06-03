import { OutputActionEventArgs } from '../actions.index';
import { RestServiceArgs } from './rest-service-args';


export class ActionPayload<T> {

  public id?: string;
  public payload?: T;
  public payloads?: T[];
  public error?: T;
}


export class ActionEventArgs<T>  {
  public Payload?: ActionPayload<T>;
  public ApiArgs?: RestServiceArgs<T>;
  public DispatchOutputAction?: boolean;
  public OutputActions?: Array<OutputActionEventArgs>;
  constructor() { }
}
