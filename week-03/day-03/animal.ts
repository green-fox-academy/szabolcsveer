'use strict';

class Animal{
  hunger: number;
  thirst: number;
  
  constructor(hunger: number = 50,thirst: number = 50){
    this.hunger = hunger;
    this.thirst = thirst;
    
  }
  eat(){
    this.hunger -= 1;
    console.log(`If this animal eats, its hunger is: ${this.hunger}`);
    
  }
  drink(){
    this.thirst -= 1;
    console.log(`If this animal eats, its hunger is: ${this.thirst}`);
  }
  play(){
    this.hunger += 1;
    this.thirst += 1;
    console.log(`If this animal eats, its hunger and thirst are: ${this.hunger} + ${this.thirst}`);
    
  }
  
  
}

const Zebra: Animal = new Animal();
Zebra.eat();
Zebra.play();
export{Animal}