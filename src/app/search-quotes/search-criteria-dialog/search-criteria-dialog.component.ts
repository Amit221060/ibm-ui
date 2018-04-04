import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'anms-search-criteria-dialog',
  templateUrl: './search-criteria-dialog.component.html',
  styleUrls: ['./search-criteria-dialog.component.scss']
})
export class SearchCriteriaDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SearchCriteriaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
