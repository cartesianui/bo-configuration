import { Action, createReducer, on } from '@ngrx/store';
import { LOADER_ACTIVE_STATE, LOADER_DEACTIVE_STATE, DEFAULT_LOADER_STATE } from '@cartesianui/common';
import * as fromConfigurationActions from '../configuration.action';
import { ConfigurationState } from '../configuration.state';

const INITIAL_STATE: ConfigurationState = {
  loader: DEFAULT_LOADER_STATE,
  result: {}
};

const configurationReducers = createReducer(
  INITIAL_STATE,
  on(
    fromConfigurationActions.doUpdateConfiguration,
    fromConfigurationActions.doFetchConfiguration,
    (state) =>
      Object.assign({}, state, {
        loader: LOADER_ACTIVE_STATE
      })
  ),
  on(
    fromConfigurationActions.doUpdateConfigurationSuccess,
    (state, { configuration }) =>
      Object.assign({}, state, {
        loader: LOADER_DEACTIVE_STATE,
        result: configuration
      })
  ),
  on(fromConfigurationActions.doFetchConfigurationSuccess, (state, { configuration }) =>
    Object.assign({}, state, {
      loader: LOADER_DEACTIVE_STATE,
      result: configuration
    })
  ),
  on(
    fromConfigurationActions.doFetchConfigurationFail,
    (state) =>
      Object.assign({}, INITIAL_STATE, {
        loader: LOADER_DEACTIVE_STATE
      })
  )
);

export const reducer = (state: ConfigurationState | undefined, action: Action) => {
  return configurationReducers(state, action);
};
