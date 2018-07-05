import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IBaseEntityState } from './entitiy-adapter.index';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreStateFactory<T> {

  private baseEntityAdapter: EntityAdapter<T>;
  private baseInitialState: IBaseEntityState<T>;
  private store: Store<T>;
  constructor() {
    console.log(this.store);
  }

  private CreateEntityAdapter() {

    this.baseEntityAdapter = createEntityAdapter<T>({
      selectId: (entity: any) => entity.id,
      sortComparer: false,
    });

    return this.baseEntityAdapter;
  }

  public GetEntityAdapter() {

    if (this.baseEntityAdapter != null) {
      return this.baseEntityAdapter;
    }

    this.CreateEntityAdapter();
    return this.baseEntityAdapter;
  }

  public GetEntityInitialState(): IBaseEntityState<T> {

    if (this.baseInitialState != null) {
      return this.baseInitialState;
    }

    return this.baseEntityAdapter.getInitialState({
      isLoading: false,
      selectedEntityId: null,
      error: null,
      hasError: false,
      isLoaded: false
    });
  }

  public getState(): Observable<T> {
    return this.store.select(s => s);
  }

  public selectedEntityId = (state: IBaseEntityState<T>) => state.selectedEntityId;
  public selectIsLoading = (state: IBaseEntityState<T>) => state.isLoading;
  public selectError = (state: IBaseEntityState<T>) => state.error;

}

export function generateStateFact<T>(_entityType: T) {
  return createEntityAdapter<typeof _entityType>({
    selectId: (entity: any) => entity.id,
    sortComparer: false,
  });

}


