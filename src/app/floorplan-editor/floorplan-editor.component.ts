import { Component, OnInit } from '@angular/core';
import { FloorPlanData } from 'src/models/floorplandata';
import { FloorplanService } from 'src/services/floorplan.service';

@Component({
  selector: 'app-floorplan-editor',
  templateUrl: './floorplan-editor.component.html',
  styleUrls: ['./floorplan-editor.component.sass']
})
export class FloorplanEditorComponent implements OnInit {

  floorPlanService: FloorplanService;
  floorPlanData: FloorPlanData;

  isAdding: boolean = false;
  isDeleting: boolean = false;
  dragging_camera_btn: boolean = false;

  constructor(floorPlanService: FloorplanService) {
    this.floorPlanService = floorPlanService;
    this.floorPlanData = floorPlanService.hardcodedData();
  }

  ngOnInit(): void {

  }

  onDrag() {
    this.dragging_camera_btn = true;
  }

  onMouseUp() {
    console.log('up');
  }

  drop(event: any) {
    console.log('dropped');
    this.dragging_camera_btn = false;
    event.source._dragRef.reset();
  }

  onAdd() {
    this.isAdding = true;
  }

  doneAdding(){
    this.isAdding = false;
  }
}
