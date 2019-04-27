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

class SharpieSet extends Sharpie{
// name;
mySharpieArmy: string[]= [];

// constructor(name:string){
//   super()  
//   this.name = name
// }
  createSharpie(name){
    this.mySharpieArmy.push(name)
  }

  countUsable(){
    if(this.inkAmount > 0){
      console.log(`${this.mySharpieArmy} is ready to use!`);
    }else{
      console.log(`${this.mySharpieArmy} oh dammit it's out of ink again!`);
      
    }
  }
  removeTrash(){
    if(this.inkAmount < 0){
      // delete this.
    }
  }
}
let first = new SharpieSet('Blue',1)
let second = new SharpieSet('Green', 1,0)
first.createSharpie('first')
second.createSharpie('second')
// let sharpie1 = new Sharpie('Blue',1)
// let sharpie2 = new Sharpie('Green', 1)
// let sharpie3 = new Sharpie('Red', 1.5)
// let sharpie4 = new Sharpie('Black',4)
first.countUsable()
second.countUsable()
console.log(first);
console.log(second);

// console.log(mySharpieArmy);

