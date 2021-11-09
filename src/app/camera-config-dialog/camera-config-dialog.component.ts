import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-camera-config-dialog',
  templateUrl: './camera-config-dialog.component.html',
  styleUrls: ['./camera-config-dialog.component.sass']
})
export class CameraConfigDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CameraConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,) { }

  ngOnInit(): void {
  }

}
