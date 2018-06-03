import { OutputActionEventArgs } from './../event-args/output-event-args';
import { AppBaseAction } from '../app-base-action';
import * as appStoreActions from '../app-store.actions';
import { BaseEntityActions } from '../entity-actions.enum';
import { EnumValues } from 'enum-values';


export function getActionTypesNameFromType<T>(
  actions: Array<AppBaseAction<T>>
): Array<string> {
  const types: Array<string> = [];

  actions.forEach(element => {
    types.push(element.type.toString());
  });
  return types;
}

export function getActionTypesName(
  actions: Array<BaseEntityActions>
): Array<string> {
  const types: Array<string> = [];
  actions.forEach(element => {
    types.push(element.toString());
  });
  return types;
}


export function getActionTypesInstances<T>(outputActs: Array<OutputActionEventArgs>, payload: T): Array<AppBaseAction<T>> {

  const types: Array<AppBaseAction<T>> = [];
  outputActs.forEach((element: OutputActionEventArgs) => {
    const actionAsEnum = EnumValues.getNameFromValue(BaseEntityActions, element.Type);
    if (element.AcceptPayload) {
      types.push(new appStoreActions[actionAsEnum](payload));
    } else {
      types.push(new appStoreActions[actionAsEnum]());
    }
  });
  return types;
}
