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

  constructor(floorPlanService: FloorplanService) {
    this.floorPlan = floorPlanService.hardcodedData();
  }

  ngOnInit(): void {
    console.log(this.floorPlan);
    

  }

}
