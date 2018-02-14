import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './core/guard/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Sign In'}
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [LoginGuard],
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    canActivate: [LoginGuard]
    // loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'myquotes',
    // loadChildren: 'app/quoteactions/quoteactions.module#QuoteactionsModule'
    redirectTo: 'myquotes',
    canActivate: [LoginGuard]
  },
  {
    path: 'searchquotes',
    // loadChildren: 'app/quoteactions/quoteactions.module#QuoteactionsModule'
    redirectTo: 'searchquotes',
    canActivate: [LoginGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    }
  },
  // {
  //   path: 'examples',
  //   loadChildren: 'app/examples/examples.module#ExamplesModule'
  // },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
