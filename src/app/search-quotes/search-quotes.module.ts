import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchQuoteContainerComponent } from './search-quote-container/search-quote-container.component';
import { SearchCriteriaComponent } from '../search-quotes/search-criteria/search-criteria.component';
import { ManagSearchCriteriaComponent } from './manag-search-criteria/manag-search-criteria.component';
import { EditCriteriaComponent } from './edit-criteria/edit-criteria.component';
import { AddCriteriaComponent } from './add-criteria/add-criteria.component';
import { SearchResultGridComponent } from './search-result-grid/search-result-grid.component';
import { SearchResultHeaderComponent } from './search-result-header/search-result-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { AgGridModule } from 'ag-grid-angular';
import { SearchCriteriaDialogComponent } from './search-criteria-dialog/search-criteria-dialog.component';
import { SearchQuoteService } from './search-quote.service';
import { StoreModule } from '@ngrx/store';
import { searchQuoteReducer } from '@app/search-quotes/search-quote-reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchQuoteEffects } from '@app/search-quotes/search-quote-effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    StoreModule.forFeature('searchquote', searchQuoteReducer),
    EffectsModule.forFeature([SearchQuoteEffects])
  ],
  entryComponents: [
    SearchCriteriaComponent,
    SearchCriteriaDialogComponent
  ],
  declarations: [
    SearchQuoteContainerComponent,
    SearchCriteriaComponent,
    ManagSearchCriteriaComponent,
    EditCriteriaComponent,
    AddCriteriaComponent,
    SearchResultGridComponent,
    SearchResultHeaderComponent,
    SearchCriteriaDialogComponent
  ],
  providers: [SearchQuoteService]
})
export class SearchQuotesModule { }
