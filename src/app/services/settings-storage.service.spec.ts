import { TestBed } from '@angular/core/testing';

import { SettingsStorageService } from './settings-storage.service';

describe('SettingsStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsStorageService = TestBed.get(SettingsStorageService);
    expect(service).toBeTruthy();
  });
});
