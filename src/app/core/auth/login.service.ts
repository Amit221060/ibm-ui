import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { ApiInfo } from '@app/core/models/api-info';
import { Observable } from 'rxjs/Observable';
import { LoginResponse, LoginRequest, AuthorizedRequest, AuthorizeResponse } from './auth.reducer';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { ApiConnectorService } from '../../common/api-connector.service';
import { ApiConnector } from '../model/api-connector';
import { LoginPayload } from '../model/login-payload';

@Injectable()
export class LoginService {

  constructor(private apiConnector: ApiConnectorService) { }

  signin(payLoad: {username: string, password: string, env: string}):
  Observable<LoginPayload> {
    console.log('login service called');
    const connector: ApiConnector = this.apiConnector.getClient('api/login/', payLoad);
    return connector.apiClient.post<LoginPayload>(connector.apiUrl, payLoad);
  }

  login(payload: LoginRequest): Observable<LoginResponse> {
    console.log('login service called');
    const connector: ApiConnector = this.apiConnector.getClient('api/get/', payload);
    // return this.httpClient.get<LoginResponse>('/api/get', {params: params});
    const url = connector.apiUrl + this.getQueryString(connector.reqPayLoad);
    //  + '?apiid=' + payload.apiid + '&' + 'methodname=' + payload.methodname;
    return connector.apiClient.get<LoginResponse>(url, connector.options);
  }

  authorize(payload: AuthorizedRequest): Observable<AuthorizeResponse> {
    console.log('authorize service called');
    const connector: ApiConnector = this.apiConnector.getClient('api/get/', payload);
    const url = connector.apiUrl + this.getQueryString(connector.reqPayLoad);
    //  + '?apiid=' + payload.apiid + '&' + 'methodname=' + payload.methodname
    //               + '&selectedgroup=' + payload.selectedgroup;
    return connector.apiClient.get<AuthorizeResponse>(url, connector.options);
  }

  getQueryString(params): string {
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    console.log('QUERY STRING', queryString);
    return ('?' + queryString);
  }

}
