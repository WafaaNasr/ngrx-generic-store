import { EntityState } from '@ngrx/entity';

export interface IBaseEntityState<T> extends EntityState<T> {

    isLoading: boolean;
    selectedEntityId: any;
    error: any;
  }
