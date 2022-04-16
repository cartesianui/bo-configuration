import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { ConfigurationFeatureState, ConfigurationState } from './configuration.state';
import { Configuration } from '../models';

export const getConfigurationFeatureState = createFeatureSelector<ConfigurationFeatureState>('configuration');

export const getConfiguration: MemoizedSelector<object, object> = createSelector(getConfigurationFeatureState, (state: ConfigurationFeatureState) => state.configuration);

export const getConfigurationResult: MemoizedSelector<object, object> = createSelector(getConfiguration, (state: ConfigurationState) => state.result);

export const getConfigurationLoading: MemoizedSelector<object, boolean> = createSelector(getConfiguration, (state: ConfigurationState) => state.loader.loading);

export const getConfigurationLoaded: MemoizedSelector<object, boolean> = createSelector(getConfiguration, (state: ConfigurationState) => state.loader.loaded);
