//#region Imports

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subject, of } from 'rxjs';

import { map, takeWhile, catchError } from 'rxjs/operators';

import * as appStoreActions from './app-store.actions';
import * as evtArgsHelpers from './helpers/event-args-helper';
import { AppBaseAction } from './app-base-action';
import { OutputActionEventArgs } from './event-args/output-event-args';
import { RestServiceArgs } from './event-args/rest-service-args';
//#endregion

@Injectable({
  providedIn: 'root'
})
export class AppActionDispatcher<T> extends Subject<T> {
  constructor(private http: HttpClient) {
    super();
  }

  //#region private-methods

  private generateEffect(apiArgs: RestServiceArgs<T>,
    outputEvtArgs: Array<OutputActionEventArgs>,
    dispatchOutputAction: boolean
  ): Observable<Array<AppBaseAction<T>>> {

    return this.http[apiArgs.Type.toString()](apiArgs.Url, apiArgs.data).
      pipe(

        takeWhile(() => dispatchOutputAction)
        , map((res) => [...evtArgsHelpers.getActionTypesInstances(outputEvtArgs,
          res)])
        , catchError(error => of(new appStoreActions.DefaultError(error)))
      )
  }

  //#endregion


  public dispatch<V>(action: AppBaseAction<T>, store: Store<V>) {
    if (action.ActionBaseEventArgs.ApiArgs) {
      {
        const generatedEffect = this.generateEffect(action.ActionBaseEventArgs.ApiArgs,
          action.ActionBaseEventArgs.OutputActions, action.ActionBaseEventArgs.DispatchOutputAction);
        generatedEffect.subscribe((actions: Array<AppBaseAction<T>> | AppBaseAction<T>) => {
          if (Array.isArray(actions)) {
            (actions as Array<AppBaseAction<T>>).forEach(actn => {
              store.dispatch(actn);
            });
          } else {
            store.dispatch(actions as AppBaseAction<T>);
          }
        });
      }
    }
  }
}
