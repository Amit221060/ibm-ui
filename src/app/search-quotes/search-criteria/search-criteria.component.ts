import { Component, OnInit, Input } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SearchCriteriaDialogComponent } from '@app/search-quotes/search-criteria-dialog/search-criteria-dialog.component';

@Component({
  selector: 'anms-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {
  @Input() savedCriteria;
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  form: FormGroup = new FormGroup({
    selectedCriteria: new FormControl('')
  });
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log('Saved criteria in the store', this.savedCriteria);
  }

  onAddNewCriteria() {
    const dialogRef = this.dialog.open(SearchCriteriaDialogComponent, {
      width: '600px',
      height: '500px',
      data: {title: 'Add new criteria'}
  })
  }

}
