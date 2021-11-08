import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraConfigDialogComponent } from './camera-config-dialog.component';

describe('CameraConfigDialogComponent', () => {
  let component: CameraConfigDialogComponent;
  let fixture: ComponentFixture<CameraConfigDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraConfigDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
