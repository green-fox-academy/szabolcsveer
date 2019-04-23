'use strict';

import { Plants } from "./plants";

class Flower extends Plants{

  constructor(limit:number,waterAbs:number,color:string){
    super(limit,waterAbs,color);
  }

  waterFlowers(water){
    super.waterPlants(water);
    if(this.currentWaterLevel > this.limit){
      this.needsWatering = false;
    }else{
      this.needsWatering = true;
    }
  }
}
export{Flower}