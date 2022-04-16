import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ConfigurationHttpService } from '../shared/configuration-http.service';
import * as fromConfigurationActions from './configuration.action';
import { ConfigurationFeatureState } from './configuration.state';

@Injectable()
export class ConfigurationEffects {
  constructor(private actions$: Actions, private configurationHttpService: ConfigurationHttpService, private store: Store<ConfigurationFeatureState>) {}

  doFetchConfiguration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromConfigurationActions.doFetchConfiguration),
      map((action) => action.key),
      switchMap((key) =>
        this.configurationHttpService.fetchConfiguration(key).pipe(
          map((results) =>
            fromConfigurationActions.doFetchConfigurationSuccess({
              configuration: results.data
            })
          ),
          catchError((error) => of(fromConfigurationActions.doFetchConfigurationFail(error)))
        )
      )
    )
  );

  doUpdateConfiguration$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromConfigurationActions.doUpdateConfiguration),
      map((action) => action.form),
      switchMap((form) =>
        this.configurationHttpService.updateConfiguration(form.id, form.key, form).pipe(
          map((configuration) => {
            return fromConfigurationActions.doUpdateConfigurationSuccess(configuration);
          }),
          catchError((error) => of(fromConfigurationActions.doUpdateConfigurationFail(error)))
        )
      )
    );
  });
}
