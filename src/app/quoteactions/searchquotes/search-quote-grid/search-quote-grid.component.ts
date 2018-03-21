import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { SearchResult } from '../mock/refData';
import { HeaderComponentComponent } from '../header-component/header-component.component';

@Component({
  selector: 'anms-search-quote-grid',
  templateUrl: './search-quote-grid.component.html',
  styleUrls: ['./search-quote-grid.component.scss']
})
export class SearchQuoteGridComponent implements OnInit {
  gridOptions: GridOptions;
  showGrid: boolean;
  rowData: any[];
  columnDefs: any[];
  rowCount: string;
  constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.rowData = SearchResult.RESULTS;
        this.createColumnDefs();
        this.showGrid = true;
        // this.gridOptions.dateComponentFramework = DateComponent;
        this.gridOptions.defaultColDef = {
            headerComponentFramework : <{new(): HeaderComponentComponent}>HeaderComponentComponent,
            headerComponentParams : {
                menuIcon: 'fa-bars'
            }
        }

  }

  ngOnInit() {
  }

  private createColumnDefs() {
    this.columnDefs = [
    {
      headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
      suppressMenu: true, pinned: true
    },
    {
      headerName: 'Quote Id', field: 'quoteid',
      width: 150, pinned: true
    },
    {
      headerName: 'Country', field: 'ctrycode',
      width: 150, pinned: true
    }]
  }
  private calculateRowCount() {
    if (this.gridOptions.api && this.rowData) {
        const model = this.gridOptions.api.getModel();
        const totalRows = this.rowData.length;
        const processedRows = model.getRowCount();
        this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
    }
}
    private onModelUpdated() {
        console.log('onModelUpdated');
        this.calculateRowCount();
    }

    public onReady() {
        console.log('onReady');
        this.calculateRowCount();
    }

    private onCellClicked($event) {
        console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellValueChanged($event) {
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
    }

    private onCellDoubleClicked($event) {
        console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellContextMenu($event) {
        console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellFocused($event) {
        console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    }

    private onRowSelected($event) {
        // taking out, as when we 'select all', it prints to much to the console!!
        // console.log('onRowSelected: ' + $event.node.data.name);
    }

    private onSelectionChanged() {
        console.log('selectionChanged');
    }

    private onBeforeFilterChanged() {
        console.log('beforeFilterChanged');
    }

    private onAfterFilterChanged() {
        console.log('afterFilterChanged');
    }

    private onFilterModified() {
        console.log('onFilterModified');
    }

    private onBeforeSortChanged() {
        console.log('onBeforeSortChanged');
    }

    private onAfterSortChanged() {
        console.log('onAfterSortChanged');
    }

    private onVirtualRowRemoved($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    }

    private onRowClicked($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    }

    public onQuickFilterChanged($event) {
        console.log('onQuickFilterChanged');
        this.gridOptions.api.setQuickFilter($event.target.value);
    }

    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    private onColumnEvent($event) {
        console.log('onColumnEvent: ' + $event);
    }

}


