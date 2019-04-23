'use strict';

import { Plants } from "./plants";

class Tree extends Plants{

  constructor(limit:number,waterAbs:number,color:string){
    super(limit,waterAbs,color);
  }

  waterTrees(water){
    super.waterPlants(water);
    if(this.currentWaterLevel > this.limit){
      this.needsWatering = false;
    }else{
      this.needsWatering = true;
    }
  }
}

export {Tree}