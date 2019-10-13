import { TestBed } from '@angular/core/testing'

import { GeneralSettingsStorageService } from './general-settings-storage.service'

describe('GeneralSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: GeneralSettingsStorageService = TestBed.get(GeneralSettingsStorageService)
    expect(service).toBeTruthy()
  })
})
