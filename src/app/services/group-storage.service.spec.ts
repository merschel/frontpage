import { TestBed } from '@angular/core/testing'

import { GroupStorageService } from './group-storage.service'

describe('GroupStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: GroupStorageService = TestBed.get(GroupStorageService)
    expect(service).toBeTruthy()
  })
})
