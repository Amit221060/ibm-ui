import { Action } from '@ngrx/store';
import { SearchCriteria, SearchQuoteState } from '@app/search-quotes/models/search-quote-state';
import { DefaultCriteria } from '@app/search-quotes/models/default-criteria.enum';
import { AppState } from '@app/core/models/app-state';

export const SEARCH_QUOTE_KEY = 'SEARCHQ';

export enum SearchQuoteActionTypes {
    SEARCH_QUOTE_GET_SAVED_CRITERIA = '[SEARCHQ] Get Saved Criteria',
    SEARCH_QUOTE_GET_SAVED_CRITERIA_SUCCESS = '[SEARCHQ] Get Saved Criteria Success'
}

export class GetSavedCriteriaAction implements Action {
    readonly type = SearchQuoteActionTypes.SEARCH_QUOTE_GET_SAVED_CRITERIA;
}

export class GetSavedCriteriaSuccessAction implements Action {
    readonly type = SearchQuoteActionTypes.SEARCH_QUOTE_GET_SAVED_CRITERIA_SUCCESS;
    constructor(public payload: SearchCriteria[]) {}
}

export type SearchQuoteActions = GetSavedCriteriaAction |
                                 GetSavedCriteriaSuccessAction

export const initialSate: SearchQuoteState = {
    loading: false,
    loadingMsg: '',
    defaultCriteria: DefaultCriteria.MY_QUOTES_CODE,
    savedCriterias: [],
    lastSelectedCriteria: 'MQ',
    results: null
}

export const selectorSearchQuote = (state: AppState) => state.searchquote || initialSate;

export function searchQuoteReducer(
    state: SearchQuoteState = initialSate,
    action: SearchQuoteActions
): SearchQuoteState {
    switch (action.type) {
        case SearchQuoteActionTypes.SEARCH_QUOTE_GET_SAVED_CRITERIA:
            return {
                ...state,
                loading: true,
                loadingMsg: 'Loading search quotes...'
            }
        case SearchQuoteActionTypes.SEARCH_QUOTE_GET_SAVED_CRITERIA_SUCCESS:
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                savedCriterias: action.payload
            }
         default:
            return state;
    }
}


