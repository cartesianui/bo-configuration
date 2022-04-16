import { ActionReducerMap } from '@ngrx/store';
import { reducer as configurationReducer } from './reducers/configuration.reducer';
import { ConfigurationFeatureState } from './configuration.state';

export const configurationFeatureKey = 'configuration';

export const configurationReducers: ActionReducerMap<ConfigurationFeatureState> = {
  configuration: configurationReducer
};
