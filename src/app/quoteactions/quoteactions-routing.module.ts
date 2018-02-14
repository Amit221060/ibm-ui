import { Routes, RouterModule } from '@angular/router';
import { SearchquotesComponent } from './searchquotes/searchquotes/searchquotes.component';
import { MyquotesComponent } from './myquotes/myquotes/myquotes.component';
import { NgModule } from '@angular/core';
import { LoginGuard } from '../core/guard/login.guard';
const routes: Routes = [
  {
    path: 'searchquotes',
    component: SearchquotesComponent,
    canActivate: [LoginGuard],
    data: { title: 'Search Quotes'}
  },
  {
    path: 'myquotes',
    component: MyquotesComponent,
    canActivate: [LoginGuard],
    data: { title: 'My Quotes'}
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteActionRouterModule {}
