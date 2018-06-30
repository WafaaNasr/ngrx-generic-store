import { Injectable } from '@angular/core';

import { StoreStateFactory } from './entity-adapter/store-state-factory';
import { AppState } from './app.reducer';
import { IBaseEntityState } from './entity-adapter/entitiy-adapter.index';
import { EntitySelectors } from '@ngrx/entity/src/models';

import { combineLatest, Observable } from 'rxjs';

import { Store } from '@ngrx/store';

@Injectable()
export class StoreSelectors {


    constructor(public store: Store<AppState>) {
    }

    getAll(selectAll): Observable<any> {
        return this.store.select(selectAll);
    }

    getIsLoading(isLoading) {
        return this.store.select(isLoading);
    }

    getError(error) {
        return this.store.select(error);
    }

    findById(selectAll, record: { id }) {
        return this.getAll(selectAll)[record['id']];
    }

    getCurrentSelected(selectAll, selectCurrentId) {
        return combineLatest( // FOR NOW - Replace by pipe 
            this.getAll(selectAll),
            this.store.select(selectCurrentId),
            (entities, selectedId) => selectedId.map(id => entities[id])
        );
    }
}
