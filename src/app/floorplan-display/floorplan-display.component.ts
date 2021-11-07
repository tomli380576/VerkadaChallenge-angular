import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FloorPlanData } from 'src/models/floorplandata';

@Component({
  selector: 'app-floorplan-display',
  templateUrl: './floorplan-display.component.html',
  styleUrls: ['./floorplan-display.component.sass']
})
export class FloorplanDisplayComponent implements OnInit {

  @Input() floorPlanData!: FloorPlanData;
  @Output() floorPlanDataChange = new EventEmitter<FloorPlanData>();
  @Output() doneAddingCam = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.floorPlanData);
  }

  onMouseOver(x: number, y: number): void {
    //console.log("mouseover: ", x, y);
  }

  onMouseLeave(x: number, y: number): void {

  }

  onMouseUp(x: number, y: number): void {
    console.log("mouseup", x, y);
    let slot_val = this.floorPlanData.floorPlan[y][x];
    if (slot_val == 2) {
      this.floorPlanData.floorPlan[y][x] = 0;
    } else {
      slot_val == 0 ? this.floorPlanData.floorPlan[y][x] = 2 : {};
    }

    this.floorPlanDataChange.emit(this.floorPlanData);
    this.doneAddingCam.emit();
  }

}
