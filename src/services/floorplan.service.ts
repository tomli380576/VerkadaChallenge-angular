import { Injectable } from '@angular/core';
import { FloorPlanData } from 'src/models/floorplandata';
import test_data from './testdata.json'

@Injectable({
  providedIn: 'root'
})
export class FloorplanService {

  constructor() { }

  /**
   * @brief This class is decoupled from the view model
   * Make a new function if we need dynamic data and call that one
   */
  hardcodedData(): FloorPlanData {
    let hard_coded_data: FloorPlanData = {
      width: test_data.data.width,
      height: test_data.data.height,
      floorPlan: test_data.data.floorplan
    }
    return hard_coded_data;
  }

  exportFloorPlan(data: FloorPlanData) {
    console.log(data);
    const exported_JSON = JSON.stringify(data); // this is ready to save
  }

}
