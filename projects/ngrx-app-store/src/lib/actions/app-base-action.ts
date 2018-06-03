import { Action } from '@ngrx/store';
import { ActionEventArgs } from './event-args/action-event-args';
import { BaseEntityActions } from './entity-actions.enum';

export class AppBaseAction<T> implements Action {
  readonly type: BaseEntityActions;
  constructor(public ActionBaseEventArgs: ActionEventArgs<T>) {
    console.log(ActionBaseEventArgs.Payload);
  }
}
