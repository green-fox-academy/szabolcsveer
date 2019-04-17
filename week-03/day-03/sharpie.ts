'use strict';
export{}

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string,width:number,inkAmount:number = 100.0) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
    
  }

  use(){
    this.inkAmount -= 0.25;
    console.log(this.inkAmount)
  }


}

const toll1: Sharpie = new Sharpie('blue',0.8);

toll1.use();