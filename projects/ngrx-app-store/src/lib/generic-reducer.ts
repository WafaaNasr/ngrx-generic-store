
import { IBaseEntityState } from "./entity-adapter/ibase-entity-state";
import { AppBaseAction } from "./actions/app-base-action";
import { StoreStateFactory } from "./entity-adapter/store-state-factory";
import { BaseEntityActions } from "./actions/entity-actions.enum";

export function createGenericReducer<T>(state: IBaseEntityState<T>, action: AppBaseAction<T>): IBaseEntityState<T> {

    const adapter = new StoreStateFactory<T>();
    const entityAdapter = adapter.GetEntityAdapter();

    switch (action.type) {
        case BaseEntityActions.DefaultLoad: {
            return Object.assign({}, state, {
                isLoading: true,
                isLoaded: false,
                hasError: false,
                error: null,
                ids: [],
                entities: []
            });
        }

        case BaseEntityActions.DefaultLoadSuccess: {
            return {
                ...entityAdapter.addMany(action.ActionBaseEventArgs.Payload as T[], state),
                isLoading: false,
                error: null
            };
        }

        case BaseEntityActions.DefaultCreateSuccess: {
            return {
                ...entityAdapter.addOne(action.ActionBaseEventArgs.Payload as T, state),
                error: null,
                isLoading: false,
                isLoaded: true,
                hasError: false
            };
        }

        case BaseEntityActions.DefaultUpdateSuccess: {
            return {
                ...entityAdapter.updateOne({
                    id: action.ActionBaseEventArgs.Payload.id,
                    changes: action.ActionBaseEventArgs.Payload as T
                }, state),
                isLoading: false,
                error: null,
                isLoaded: true,
                hasError: false
            };
        }

        case BaseEntityActions.DefaultRemoveSuccess: {
            return {
                ...entityAdapter.removeOne(action.ActionBaseEventArgs.Payload.id, state),
                isLoading: false,
                error: null, isLoaded: true,
                hasError: false
            };
        }
        case BaseEntityActions.DefaultError: {
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                hasError: true,
                error: action.ActionBaseEventArgs.Payload,
                ids: [],
                entities: []
            });
        }

        default: {
            return state;
        }
    }
}
