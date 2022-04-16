import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Path, Body, Criteria, DefaultHeaders, GET, HttpService, POST, RequestCriteria, DELETE, PATCH } from '@cartesianui/ng-axis';
import { Configuration } from '../models/domain/configuration.model';

@Injectable()
@DefaultHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json'
})
export class ConfigurationHttpService extends HttpService {

  @GET('/configurations/{key}/transform')
  public fetchConfiguration(@Path('key') key: string): Observable<any> {
    return null;
  }

  @PATCH('/configurations/{key}/{id}')
  public updateConfiguration(@Path('id') id: string, @Path('key') key: string, @Body form: Configuration): Observable<any> {
    return null;
  }

}
