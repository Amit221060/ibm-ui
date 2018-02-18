import { Action } from '@ngrx/store';
import { IQuoteStatus } from './quotestatus/quotestatus.model';
import { CodeLabel } from '../../common/models/code-label';

export const REF_KEY = 'REF';

export enum ReferenceDataActionTypes {
  REF_LOAD_QUOTE_STATUS_REASONCODES = '[Ref] Load Quote Status Reasoncodes',
  REF_LOAD_QUOTE_STATUS_REASONCODES_SUCCESS = '[Ref] Load Quote Status Reasoncodes Success',
  REF_LOAD_QUOTE_STATUS_REASONCODES_FAIL = '[Ref] Load Quote Status Reasoncodes Fail'
}

export class ActionRefLoadQuoteStatusReasoncodes implements Action {
  readonly type = ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES;
  constructor(public payload: {apiid: string, methodname: string}) {}
}

export class ActionRefLoadQuoteStatusReasoncodesSuccess implements Action {
  readonly type = ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES_SUCCESS;
  constructor(public payload: IQuoteStatus) {}
}

export class ActionRefLoadQuoteStatusReasoncodesFail implements Action {
  readonly type = ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES_FAIL;
  constructor(public payload: {errorMessage: string}) {}
}

export type RefDataAction = ActionRefLoadQuoteStatusReasoncodes
                            | ActionRefLoadQuoteStatusReasoncodesSuccess
                            | ActionRefLoadQuoteStatusReasoncodesFail

export const initialRefState: RefState = {
  loading: false,
  loadingMsg: '',
  errorMessage: '',
  bpQuoteStatuses: [],
  internalQuoteStatuses: [],
  bpRessonCodes: [],
  internalResonCodes: []
}

export function refDataReducer(
  state: RefState = initialRefState,
  action: RefDataAction
): RefState {
  switch (action.type) {
    case ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES:
      return {
        ...state,
        apiRequest: action.payload
      }
    case ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES_SUCCESS:
      return {
        ...state,
        bpQuoteStatuses: action.payload.bpstatuslist,
        internalQuoteStatuses: action.payload.internalstatuslist,
        bpRessonCodes: action.payload.bpreasoncodeslis,
        internalResonCodes: action.payload.internalreasoncodeslist
      }
    case ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
    default:
      return state
  }
}

export interface RefState {
  loading: boolean,
  apiRequest?: any,
  loadingMsg: string,
  errorMessage: string,
  bpQuoteStatuses: CodeLabel[],
  internalQuoteStatuses: CodeLabel[],
  bpRessonCodes: CodeLabel[],
  internalResonCodes: CodeLabel[]
}
