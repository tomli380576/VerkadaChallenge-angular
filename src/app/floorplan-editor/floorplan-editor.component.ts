import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floorplan-editor',
  templateUrl: './floorplan-editor.component.html',
  styleUrls: ['./floorplan-editor.component.sass']
})
export class FloorplanEditorComponent implements OnInit {

  camera_btn_x: number | undefined;
  camera_btn_y: number | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

  drop(event: any) {
    console.log('dropped');
    event.source._dragRef.reset();
  }
}
