import { Injectable, Injector } from '@angular/core';
import { Sandbox } from '@cartesianui/common';
import { select, Store } from '@ngrx/store';
import * as actions from './store/configuration.action';
import * as selectors from './store/configuration.selector';
import { Configuration } from './models/domain/configuration.model';
import { ConfigurationFeatureState } from './store/configuration.state';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationSandbox extends Sandbox {

  configuration$ = this.store.pipe(select(selectors.getConfigurationResult));
  isLoading$ = this.store.pipe(select(selectors.getConfigurationLoading));
  isLoaded$ = this.store.pipe(select(selectors.getConfigurationLoaded));

  constructor(protected store: Store<ConfigurationFeatureState>, protected injector: Injector) {
    super(injector);
  }

  fetchConfigurationByType(key: string): void {
    this.store.dispatch(actions.doFetchConfiguration({ key }));
  }

  fetchConfiguration(key: string): void {
    this.store.dispatch(actions.doFetchConfiguration({ key }));
  }

  public updateConfiguration(form: Configuration): void {
    this.store.dispatch(actions.doUpdateConfiguration({ form }));
  }
}
