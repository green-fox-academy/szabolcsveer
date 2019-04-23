'use strict';




class Plants{
  currentWaterLevel: number = 0;
  limit: number;  
  waterAbsorbance: number;
  needsWatering: boolean;
  color: string;


  constructor(limit:number,waterAbs:number,color:string){
    this.limit = limit;
    this.waterAbsorbance = waterAbs;
    this.color = color;
  }

  waterPlants(water){
    this.currentWaterLevel =+ water * this.waterAbsorbance;

  }

}




export{Plants}