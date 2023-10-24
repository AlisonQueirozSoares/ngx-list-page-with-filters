import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxListPageWithFiltersComponent } from './ngx-list-page-with-filters.component';

describe('NgxListPageWithFiltersComponent', () => {
  let component: NgxListPageWithFiltersComponent;
  let fixture: ComponentFixture<NgxListPageWithFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxListPageWithFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxListPageWithFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
