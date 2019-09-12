import { TestBed } from '@angular/core/testing';

import { BookFilterService } from './book-filter.service';

describe('BookFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookFilterService = TestBed.get(BookFilterService);
    expect(service).toBeTruthy();
  });
});
