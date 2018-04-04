import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCriteriaDialogComponent } from './search-criteria-dialog.component';

describe('SearchCriteriaDialogComponent', () => {
  let component: SearchCriteriaDialogComponent;
  let fixture: ComponentFixture<SearchCriteriaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCriteriaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCriteriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
