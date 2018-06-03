import { AppBaseAction } from './app-base-action';
import { BaseEntityActions } from './entity-actions.enum';
import { ActionPayload } from './event-args/action-event-args';
import { RestAPIVerbs } from '../enums/rest-api-verbs.enum';


export class DefaultLoad<T> extends AppBaseAction<T> {
  type = BaseEntityActions.DefaultLoad;

  constructor(url?: string) {
    super({
      ApiArgs: {
        Type: RestAPIVerbs.Get,
        Url: url
      },
      DispatchOutputAction: true,
      OutputActions: [{ AcceptPayload: true, Type: BaseEntityActions.DefaultLoadSuccess }]

    });
  }
}
export class DefaultLoadSuccess<T> extends AppBaseAction<ActionPayload<T>> {
  type = BaseEntityActions.DefaultLoadSuccess;
  constructor(data: any) {
    super({ Payload: data });
  }
}

export class DefaultCreate<T> extends AppBaseAction<T> {
  type = BaseEntityActions.DefaultCreate;

  constructor(url: string, data: T) {
    super({
      ApiArgs: {
        Type: RestAPIVerbs.Post,
        Url: url,
        data: data
      },
      DispatchOutputAction: true,
      OutputActions: [{ AcceptPayload: true, Type: BaseEntityActions.DefaultCreateSuccess }]
    });
  }
}
export class DefaultCreateSuccess<T> extends AppBaseAction<T> {
  type = BaseEntityActions.DefaultCreateSuccess;
  constructor(data: ActionPayload<T>) {
    super({ Payload: data });
  }
}

export class DefaultUpdate<T> extends AppBaseAction<T> {
  type = BaseEntityActions.DefaultUpdate;

  constructor(url: string, data: T) {
    super({
      ApiArgs: {
        Type: RestAPIVerbs.Put,
        Url: url,
        data: data
      },
      DispatchOutputAction: true,
      OutputActions: [{ AcceptPayload: true, Type: BaseEntityActions.DefaultUpdateSuccess }]
    });
  }
}
export class DefaultUpdateSuccess<T> extends AppBaseAction<T> {
  type = BaseEntityActions.DefaultUpdateSuccess;
  constructor(data: ActionPayload<T>) {
    super({ Payload: data });
  }
}

export class DefaultRemove<T> extends AppBaseAction<T> {
  type = BaseEntityActions.DefaultRemove;

  constructor(url: string, data: T) {
    super({
      ApiArgs: {
        Type: RestAPIVerbs.Delete,
        Url: url,
        data: data
      },
      DispatchOutputAction: true,
      OutputActions: [{ AcceptPayload: true, Type: BaseEntityActions.DefaultRemoveSuccess }]
    });
  }
}
export class DefaultRemoveSuccess<T> extends AppBaseAction<T> {
  type = BaseEntityActions.DefaultRemoveSuccess;

  constructor(data: ActionPayload<T>) {
    super({ Payload: data });
  }
}


export class DefaultError<T> extends AppBaseAction<T> {
  type = BaseEntityActions.DefaultError;
  constructor(error: T) {
    super({ Payload: { error: error } });
  }
}

export type Actions<T> =
  | DefaultLoad<T>
  | DefaultLoadSuccess<T>
  | DefaultCreate<T>
  | DefaultCreateSuccess<T>
  | DefaultUpdate<T>
  | DefaultUpdateSuccess<T>
  | DefaultRemove<T>
  | DefaultRemoveSuccess<T>
  | DefaultError<T>;

