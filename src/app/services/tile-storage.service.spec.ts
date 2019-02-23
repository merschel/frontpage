import { TestBed } from '@angular/core/testing';

import { TileStorageService } from './tile-storage.service';

describe('TileStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TileStorageService = TestBed.get(TileStorageService);
    expect(service).toBeTruthy();
  });
});
