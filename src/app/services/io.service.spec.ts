import { TestBed } from '@angular/core/testing';

import { IoService } from './io.service';

describe('IoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IoService = TestBed.get(IoService);
    expect(service).toBeTruthy();
  });
});
