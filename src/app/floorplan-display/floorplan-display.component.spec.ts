import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorplanDisplayComponent } from './floorplan-display.component';

describe('FloorplanDisplayComponent', () => {
  let component: FloorplanDisplayComponent;
  let fixture: ComponentFixture<FloorplanDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorplanDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorplanDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
