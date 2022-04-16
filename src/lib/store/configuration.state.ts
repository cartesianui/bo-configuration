import { ILoaderState, IResultState } from '@cartesianui/common';
import { Configuration } from '../models'

export interface ConfigurationState {
  loader: ILoaderState | null;
  result: IResultState<Configuration>;
}


export interface ConfigurationFeatureState {
  configuration: ConfigurationState;
}
