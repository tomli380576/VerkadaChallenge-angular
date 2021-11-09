import { Component, HostListener, OnInit } from '@angular/core';
import { FloorPlanData } from 'src/models/floorplandata';
import { FloorplanService } from 'src/services/floorplan.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CameraConfigDialogComponent } from '../camera-config-dialog/camera-config-dialog.component';

@Component({
  selector: 'app-floorplan-editor',
  templateUrl: './floorplan-editor.component.html',
  styleUrls: ['./floorplan-editor.component.sass']
})
export class FloorplanEditorComponent implements OnInit {

  floorPlanData: FloorPlanData;

  isAdding: boolean = false;
  dragging_camera_btn: boolean = false;
  curr_cam_orientation: number = 0;

  constructor(public floorPlanService: FloorplanService, public dialog: MatDialog) {
    this.floorPlanData = floorPlanService.hardcodedData();
  }

  ngOnInit(): void {
  }

  onDrag() {
    document.getElementById("cam")!.style.pointerEvents = "none";
    this.dragging_camera_btn = true;
    this.isAdding = true;
  }

  editCam(x: number, y: number): void {
    if (this.isAdding) {
      let slot_val = this.floorPlanData.floorPlan[y][x];
      if (slot_val != 1) {
        if (slot_val >= 2) {
          this.floorPlanData.floorPlan[y][x] = 0;
        } else {
          this.openDialog(x, y);
        }
      }
    }
  }

  drop(event: any) {
    this.dragging_camera_btn = false;
    document.getElementById("cam")!.style.pointerEvents = "auto";
    event.source._dragRef.reset();
  }

  private openDialog(x: number, y: number): void {
    const dialogRef = this.dialog.open(CameraConfigDialogComponent, {
      width: '250px',
      data: this.curr_cam_orientation,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.floorPlanData.floorPlan[y][x] = result;
    });
  }
}
