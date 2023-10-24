import { TestBed } from '@angular/core/testing';

import { NgxListPageWithFiltersService } from './ngx-list-page-with-filters.service';

describe('NgxListPageWithFiltersService', () => {
  let service: NgxListPageWithFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxListPageWithFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
