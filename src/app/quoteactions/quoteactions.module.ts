import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchquotesComponent } from './searchquotes/searchquotes/searchquotes.component';
import { MyquotesComponent } from './myquotes/myquotes/myquotes.component';
import { FormsModule } from '@angular/forms';
import { QuoteActionRouterModule } from './quoteactions-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuoteActionRouterModule
  ],
  declarations: [SearchquotesComponent, MyquotesComponent]
})
export class QuoteactionsModule { }
