import { createAction, props } from '@ngrx/store';
import { type, RequestCriteria } from '@cartesianui/ng-axis';
import { Configuration } from '../models/domain/configuration.model';

/**
 * Fetch Configuration Actions
 */
export const doFetchConfiguration = createAction(type('[Configuration] Do Fetch Configurations Detail'), props<{ key: string }>());
export const doFetchConfigurationSuccess = createAction(type('[Configuration] Do Fetch Configurations Detail Success'), props<{ configuration: Configuration }>());
export const doFetchConfigurationFail = createAction(type('[Configuration] Do Fetch Configurations Detail Fail'), props<{ error: any }>());

/**
 * Update Configuration Actions
 */
export const doUpdateConfiguration = createAction(type('[Configuration] Do Update Configurations'), props<{ form: Configuration }>());
export const doUpdateConfigurationSuccess = createAction(type('[Configuration] Do Update Configurations Success'), props<{ configuration: Configuration }>());
export const doUpdateConfigurationFail = createAction(type('[Configuration] Do Update Configurations Fail'), props<{ error: any }>());
