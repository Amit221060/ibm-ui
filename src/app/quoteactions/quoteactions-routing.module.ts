import { Routes, RouterModule } from '@angular/router';
import { SearchquotesComponent } from './searchquotes/searchquotes/searchquotes.component';
import { MyquotesComponent } from './myquotes/myquotes/myquotes.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: 'searchquotes',
    component: SearchquotesComponent,
    data: { title: 'Search Quotes'}
  },
  {
    path: 'myquotes',
    component: MyquotesComponent,
    data: { title: 'My Quotes'}
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteActionRouterModule {}
