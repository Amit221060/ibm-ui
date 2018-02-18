import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '../../core/animations/router.transition';
import { environment as env } from '@env/environment';
@Component({
  selector: 'anms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  versions = env.versions;
  panelOpenState = true;

  openLink(link: string) {
    window.open(link, '_blank');
  }
  constructor() { }

  ngOnInit() {
  }


}
