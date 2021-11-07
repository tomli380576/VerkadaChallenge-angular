import { Component, OnInit } from '@angular/core';
import { FloorplanService } from 'src/services/floorplan.service';
import { FloorPlanData } from 'src/models/floorplandata';

@Component({
  selector: 'app-floorplan-display',
  templateUrl: './floorplan-display.component.html',
  styleUrls: ['./floorplan-display.component.sass']
})
export class FloorplanDisplayComponent implements OnInit {

  floorPlan: FloorPlanData;
  isAdding: boolean = false;
  isDeleting: boolean = false;

  constructor(floorPlanService: FloorplanService) {
    this.floorPlan = floorPlanService.hardcodedData();
  }

  ngOnInit(): void {
    console.log(this.floorPlan);
  }

  onMouseOver(x: number, y: number): void {
    //console.log("mouseover: ", x, y);
  }

  onMouseLeave(x: number, y: number): void {

  }

  onMouseUp(x: number, y: number): void {
    console.log("mouseup", x, y);
    let slot_val = this.floorPlan.floorPlan[y][x];
    if (slot_val == 2) {
      this.floorPlan.floorPlan[y][x] = 0;
    } else {
      slot_val == 0 ? this.floorPlan.floorPlan[y][x] = 2 : {};
    }
  }
  drop(event: any) {
    console.log('dropped');
  }


}
