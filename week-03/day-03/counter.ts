'use strict';

class Counter {
  int: number;
  initial: number;
  constructor(int: number = 0) {
    this.int = int;
    this.initial = int;
    
  }

  add(number): void{
    this.int += number;
    console.log(this.int);
    
  }
  get(number): void{
    
    console.log(number.toString());
    

  }
  reset(): void{
    this.int = this.initial;
    console.log(this.int);
    
    
  }}
const myFirstNum: Counter = new Counter(10);

myFirstNum.add(5);
myFirstNum.get(5);
myFirstNum.reset();