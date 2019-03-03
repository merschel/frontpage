import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TilePlusComponent } from './tile-plus.component'

describe('TilePlusComponent', () => {
  let component: TilePlusComponent
  let fixture: ComponentFixture<TilePlusComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilePlusComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TilePlusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
