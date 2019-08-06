import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropZoneDialogComponent } from './drop-zone-dialog.component';

describe('DropZoneDialogComponent', () => {
  let component: DropZoneDialogComponent;
  let fixture: ComponentFixture<DropZoneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropZoneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropZoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
