import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppContext } from '../core/model/app-context';
import { ApiConnector } from '../core/model/api-connector';
import { Store } from '@ngrx/store';
import { AppState } from '../core/models/app-state';
import { initialState } from '../core/auth/auth.reducer';

@Injectable()
export class ApiConnectorService {
  context: AppContext;
  httpOptions: any;

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }


  getClient(url: string): ApiConnector {
    this.store.select(state => state.auth.appContext).subscribe(context => {
      // console.log('Context', context);
      this.context = context ? context : initialState.appContext;
      this.httpOptions  = {
        headers: new HttpHeaders({
          'Accept':  'application/json;charset=utf-8',
          'Accept-Charset': 'charset=utf-8',
          'X-Force-Content-Type': 'application/json; charset=UTF-8',
          'X-Context-Group': this.context.group,
          'X-Context-geo': this.context.geo,
          'X-Context-Id': this.context.uniqueid
        })
      }
      console.log('within selector of store');
    });
    console.log('before returning');
    return {apiUrl: this.context.baseUrl + url, apiClient: this.httpClient, options: this.httpOptions}
  }

}
