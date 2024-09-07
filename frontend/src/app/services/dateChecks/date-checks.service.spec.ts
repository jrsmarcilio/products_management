import { TestBed } from '@angular/core/testing';

import { DateChecksService } from './date-checks.service';

describe('DateChecksService', () => {
  let service: DateChecksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateChecksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
