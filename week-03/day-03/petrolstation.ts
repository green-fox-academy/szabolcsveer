'use strict';

class Station{
  gasAmount: number;

  constructor(gasAmount:number = 5000){
    this.gasAmount = gasAmount;
  }

  refill(car){
    this.gasAmount -= Tesla.capacity;
    car.gasAmount += car.capacity
  }
}

class Car{
  gasAmount: number;
  capacity: number;

  constructor(gasAmount:number = 0,capacity:number = 100){
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}
let PetrolStation: Station = new Station();
let Tesla: Car = new Car();

PetrolStation.refill(Tesla);
PetrolStation.refill(Tesla);
PetrolStation.refill(Tesla);
console.log(Tesla);
console.log(PetrolStation);


