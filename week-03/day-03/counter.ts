'use strict';

class Counter {
  int: number;
  initial: number;
  constructor(int: number = 0,initial: number = 0) {
    this.int = int;
    
  }

  add(number): void{
    this.int += number;
    console.log(number);
    
  }
  get(number): void{
    
    console.log(number.toString());
    

  }
  reset(): void{
    this.int = this.initial;
  }}
const myFirstNum: Counter = new Counter();

myFirstNum.add(5);
myFirstNum.get(5);