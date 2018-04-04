import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LocalStorageService } from '@app/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { SearchQuoteActionTypes,
        GetSavedCriteriaSuccessAction,
        SEARCH_QUOTE_KEY,
        GetSavedCriteriaAction } from '@app/search-quotes/search-quote-reducer';
import { tap, switchMap, map } from 'rxjs/operators';
import { SearchCriteria } from '@app/search-quotes/models/search-quote-state';
import { SearchQuoteService } from '@app/search-quotes/search-quote.service';

@Injectable()
export class SearchQuoteEffects {
    constructor(
        private action$: Actions,
        private localStorage: LocalStorageService,
        private seaquoteService: SearchQuoteService) {}

    @Effect()
    getSavedCriteria(): Observable<Action> {
        return this.action$
        .ofType(SearchQuoteActionTypes.SEARCH_QUOTE_GET_SAVED_CRITERIA)
        .pipe(
            switchMap((action: GetSavedCriteriaAction) =>
            this.seaquoteService.getSavedCriteria()
            .pipe(
                map((data: SearchCriteria[]) => new GetSavedCriteriaSuccessAction(
                    this.seaquoteService.getSavedCriteriaFromLocalStorage()))
            ))
        )
    }
}
