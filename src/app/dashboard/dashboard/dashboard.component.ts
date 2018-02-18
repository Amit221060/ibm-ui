import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '../../core/animations/router.transition';
import { environment as env } from '@env/environment';
import { LoadMyQuotesCountRequest, ActionDsbLoadMyquotesCount } from '../dashboard.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/models/app-state';
@Component({
  selector: 'anms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  versions = env.versions;
  panelOpenState = true;
  loadQuotePanel: LoadMyQuotesCountRequest;
  openLink(link: string) {
    window.open(link, '_blank');
  }
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // just for test
    this.loadQuotePanel = {apiid: 'manageQuote', methodName: 'getIBMQuoteSummary', query: 'summary'};
    this.store.dispatch(new ActionDsbLoadMyquotesCount(this.loadQuotePanel));
  }


}
