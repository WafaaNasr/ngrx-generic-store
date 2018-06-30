import { EntityState } from '@ngrx/entity';

export interface IBaseEntityState<T> extends EntityState<T> {
  isLoaded: boolean;
  isLoading: boolean;
  selectedEntityId: any;
  error: any;
  hasError: boolean;
}
