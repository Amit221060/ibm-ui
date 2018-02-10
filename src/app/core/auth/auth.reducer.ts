import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiInfo } from '../models/api-info';
import { RespHeader } from '../models/resp-header';
import { AppState } from '../models/app-state';
// import { ApiInfo } from '@app/core/models/api-info';
import { AppContext } from '../model/app-context';
import { LocalStorageService } from '@app/core';



export const AUTH_KEY = 'AUTH';

export enum AuthActionTypes {
  CREATE_CONTEXT = '[Auth] Create Context',
  REMOVE_CONTEXT = '[Auth] Remove Context',
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_UNAUTHORIZED_ERROR= '[Auth] Login Unauthorized',
  LOGIN_ERROR= '[Auth] Login Error',
  LOGIN_AUTHORIZE = '[Auth] Authorize',
  LOGIN_AUTHORIZE_SUCCESS = '[Auth] Authorize Success',
  LOGIN_AUTHORIZE_ERROR = '[Auth] Authorize Error',
  LOGOUT = '[Auth] Logout'
}

export class ActionAuthLogin implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: LoginRequest) {}
}

export class ActionAuthLoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: {data: LoginResponse, selectedGroupCode: string}) {}
}

export class ActionAuthLoginUnauthorized implements Action {
  readonly type = AuthActionTypes.LOGIN_UNAUTHORIZED_ERROR;
  constructor(public payload: {errorMessage: string}) {}
}

export class ActionAuthLoginError implements Action {
  readonly type = AuthActionTypes.LOGIN_ERROR;
  constructor(public payload: {error: HttpErrorResponse}) {}
}

export class ActionAuthAuthorize implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTHORIZE;
  constructor(public payload: AuthorizedRequest) {}
  // constructor(public payload: ApiInfo) {}
}

export class ActionAuthAuthorizeSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTHORIZE_SUCCESS;
  constructor(public payload: {data: AuthorizeResponse}) {}
  // constructor(public payload: ApiInfo) {}
}

export class ActionAuthAuthorizeError implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTHORIZE_ERROR;
  constructor(public payload: {errorMessage: string}) {}
}

export class ActionAuthLogout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = ActionAuthLogin
                        | ActionAuthLoginSuccess
                        | ActionAuthLoginUnauthorized
                        | ActionAuthLoginError
                        | ActionAuthAuthorize
                        | ActionAuthAuthorizeSuccess
                        | ActionAuthAuthorizeError
                        | ActionAuthLogout


export const initialState: AuthState = {
  appContext: {baseUrl: '/', geo: '', uniqueid: '', group: '', email: ''},
  apiRequest: {apiid: '', methodname: ''},
  isAuthenticated: false,
  displayWelcome: true,
  errorMessage: null,
  loading: false
};

export const selectorAuth = (state: AppState) => state.auth;
export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: false,
        displayWelcome: true,
        loading: true,
        apiRequest: action.payload,
        // apiResponse: null,
        error: null
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      // get the items
      const resp = action.payload.data;
      const item = action.payload.data.items[0];
      console.log('Login response ', item);
      return {
          ...state,
          appContext: {baseUrl: '/', email: item.email, geo: '', uniqueid: item.email, group: action.payload.selectedGroupCode},
          isAuthenticated: true,
          // apiResponse: action.payload.data,
          status: resp.status,
          loginResponsetime: resp.responsetime,
          userid: item.userid,
          email: item.email,
          alias: item.alias,
          browserLanguage: item.browserlanguage,
          decimalSeparator: item.decimalseparator,
          groupingSeperator: item.groupingseparator,
          groups: item.groups,
          selectedGroup: action.payload.selectedGroupCode,
          selectedGroupCode: action.payload.selectedGroupCode,
          loading: false,
          displayWelcome: true,
          error: null,
          apiRequest: null
      };

    case AuthActionTypes.LOGIN_UNAUTHORIZED_ERROR:
        return {
          ...state,
          isAuthenticated: false,
          // displayWelcome: true,
          loading: false,
          errorMessage: action.payload.errorMessage,
          error: null
        };
    case AuthActionTypes.LOGIN_AUTHORIZE:
        return {
          ...state,
          // displayWelcome: false,
          isAuthenticated: true,
          apiRequest: action.payload,
          loading: true
        };
    case AuthActionTypes.LOGIN_AUTHORIZE_SUCCESS:
    console.log(action.payload.data);
    const authResp = action.payload.data;
    const authRespItem = action.payload.data.items[0];
        return {
          ...state,
          appContext: {
                        baseUrl: '/',
                        email: state.appContext.email,
                        geo: authRespItem.geo, uniqueid: state.appContext.email,
                        group: state.appContext.group
                      },
          selectedGroupCode: authRespItem.selectedgroup,
          selectedGroupname: authRespItem.selectedgroupname,
          authToLandToPricing: authRespItem.authtolandtopricing,
          bpquotevisibility: authRespItem.bpquotevisibility,
          authorizations: authRespItem.auth_functions,
          apiRequest: null,
          error: null,
          displayWelcome: false,
          loading: false
        }
    case AuthActionTypes.LOGIN_AUTHORIZE_ERROR:

        return {
            ...state,
            loading: false,
            errorMessage: action.payload.errorMessage,
            error: null
        };
    case AuthActionTypes.LOGOUT:
      return { ...state, isAuthenticated: false, displayWelcome: true };

    default:
      return state;
  }
}

export interface AuthState {
  appContext: AppContext
  apiRequest: any,
  loading: boolean;
  isAuthenticated: boolean;
  displayWelcome: boolean;
  errorMessage?: string;
  // LoginResponse
  groups?: Group[],
  selectedGroup?: string,
  selectedGroupCode?: string,
  userid?: string;
  email?: string,
  alias?: string,
  status?: string,
  decimalSeparator?: string,
  groupingSeperator?: string;
  browserLanguage?: string;
  loginResponsetime?: string,
  error?: HttpErrorResponse,
// Authorize response (Select Group)
  selectedGroupname?: string,
  authToLandToPricing?: string,
  bpquotevisibility?: string,
  authorizations?: AuthFunction[]
}

export interface LoginRequest {
  apiid: string,
  methodname: string
}

export interface AuthorizedRequest {
  apiid: string;
  methodname: string,
  selectedgroup: string
}



export interface LoginResponse {
  responsetime: string;
  message: string;
  status: string;
  items: LoginResponseItem[],
}

export interface LoginResponseItem {
  alias: string;
  selectedgroupcode: string;
  selectedgroup: string;
  groupingseparator: string;
  decimalseparator: string;
  browserlanguage: string;
  userid: string;
  email: string;
  groups: Group[];
}

export interface Group {
  id: String;
  name: String;
}

export interface AuthorizeResponse {
  responsetime: string;
  message: string;
  status: string;
  items: AuthorizeResponseItem[]
}

export interface AuthorizeResponseItem {
  geo: string,
  selectedgroup: string,
  selectedgroupname: string,
  authtolandtopricing: string,
  bpquotevisibility: string,
  auth_functions: AuthFunction[]
}

export interface AuthFunction {
  id: string
}

