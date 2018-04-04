import { TestBed, inject } from '@angular/core/testing';

import { SearchQuoteService } from './search-quote.service';

describe('SearchQuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchQuoteService]
    });
  });

  it('should be created', inject([SearchQuoteService], (service: SearchQuoteService) => {
    expect(service).toBeTruthy();
  }));
});
