import * as UserActions from "ngrx-app-store";
import { UserEntity } from "./models/user";
import { UserState, userAdapter, userStateFactory } from "./user-store.state";
import { Injectable } from "@angular/core";
import {
  AppState, StoreSelectors, StoreService, Store, createSelector, createFeatureSelector,
  AppActionDispatcher
} from "ngrx-app-store";
import { Observable } from "rxjs";


@Injectable()
export class UserStoreSelectorService extends StoreSelectors {

  constructor(public store: Store<AppState>) {
    super(store);
  }

  private userSelection = createFeatureSelector<UserState>("users");

  public selectors = userAdapter.getSelectors(this.userSelection);


  public selectCurrentUserId = createSelector(
    this.userSelection,
    userStateFactory.selectedEntityId
  );



  public isLoading = createSelector(this.userSelection, userStateFactory.selectIsLoading);
  public error = createSelector(this.userSelection, userStateFactory.selectError);
}


@Injectable()
export class UserStoreDispatcherService extends StoreService<UserEntity, UserState> {

  constructor(public store: Store<UserState>, public appActionDispatch: AppActionDispatcher<UserEntity>) {
    super(store, appActionDispatch);
  }

  cLoadAction(api: string) {
    this.dispatchAction(new UserActions.DefaultLoad<UserEntity>(api));
  }

  dispatchCreateAction(record: UserEntity, api: string) {

    this.dispatchAction(new UserActions.DefaultCreate<UserEntity>(api, record));
  }

  dispatchUpdateAction(record: UserEntity, api: string) {
    this.dispatchAction(new UserActions.DefaultUpdate<UserEntity>(api, record));
  }

  dispatchRemoveAction(id: any, api: string) {
    this.dispatchAction(new UserActions.DefaultRemove<UserEntity>(api, id));
  }
}
