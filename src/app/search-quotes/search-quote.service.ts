import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/core';
import { SearchCriteria } from '@app/search-quotes/models/search-quote-state';
import { Observable } from 'rxjs/Observable';
import { SEARCH_QUOTE_KEY } from '@app/search-quotes/search-quote-reducer';

@Injectable()
export class SearchQuoteService {

  constructor(private localStorage: LocalStorageService) { }

  /*
  * API To retrieve all the saved criteria from the user preferance
  */
 getSavedCriteria():
 Observable<SearchCriteria[]> {
   // const connector: ApiConnector = this.apiConnector.getClient('api/login/', payLoad);
   // return connector.apiClient.post<LoginPayload>(connector.apiUrl, payLoad);
   return Observable.create(function(observer) {
     observer.next(this.getSavedCriteriaFromLocalStorage);
   })
 }

 /*
 * Mock method to get the saved search criteria from local storage
 */
getSavedCriteriaFromLocalStorage(): SearchCriteria[] {
  let savedCriteria: SearchCriteria[]  = this.localStorage.getItem(SEARCH_QUOTE_KEY) ?
                    this.localStorage.getItem(SEARCH_QUOTE_KEY).savedCriteria : []
  if (savedCriteria && savedCriteria.length > 0) {
      return savedCriteria;
  } else {
      savedCriteria = [{
          id: 'MQ',
          name: 'My Quotes',
          default: true,
          editable: false,
          sequence: 1,
          fetchCount: 300
      },
      {
          id: 'EQ',
          name: 'Expiring Quotes',
          default: false,
          editable: true,
          sequence: 2,
          fetchCount: 300,
          searchOnName: 'Expired In',
          searchOnValue: 5
      }
  ];
  this.localStorage.setItem(SEARCH_QUOTE_KEY, {
      savedCriteria: savedCriteria
  })
  }
  return savedCriteria;
}

}
