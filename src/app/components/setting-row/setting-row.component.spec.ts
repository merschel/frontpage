import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SettingRowComponent } from './setting-row.component'

describe('SettingRowComponent', () => {
  let component: SettingRowComponent
  let fixture: ComponentFixture<SettingRowComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingRowComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingRowComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
