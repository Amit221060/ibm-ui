import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/models/app-state';
import { SearchCriteria, SearchQuoteState } from '@app/search-quotes/models/search-quote-state';
import { GetSavedCriteriaAction, selectorSearchQuote } from '@app/search-quotes/search-quote-reducer';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { CriteriaDefinination, CriteriaDef } from '@app/search-quotes/models/criteria-def';

@Component({
  selector: 'anms-search-quote-container',
  templateUrl: './search-quote-container.component.html',
  styleUrls: ['./search-quote-container.component.scss']
})
export class SearchQuoteContainerComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  // saved criteria
  savedCriteria: SearchCriteria[];
  searchCriteria: CriteriaDefinination[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    /*
    * Mock methods - Get the saved criteria.. there are two predefined criterias that will always be there
    * 1. My Quotes
    * 2. Expiring Quotes
    */
   this.getSavedCriteria();
   this.searchCriteria = CriteriaDef.CRITERIA_DEF;
  }

  getSavedCriteria() {
    this.store.dispatch(new GetSavedCriteriaAction());
    this.store.select(selectorSearchQuote)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((searchQuoteState: SearchQuoteState) => {
      this.savedCriteria = searchQuoteState.savedCriterias;
    })
  }


}
