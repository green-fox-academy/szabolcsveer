'use strict';

import {Comparable} from './comparable'
import { Thing } from './things'
import {Printable} from './Printable/printable'


class Domino implements Comparable,Printable {
  PrintAllFields(){}

  compareTo(other: Domino): number{
    if(this.values[0] < other.values[0]){
      return -1
    }else if(this === other){
      return 0
    }else{
      return 1 
    }
  }
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});

// the order of your dominoes should look like this: [[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]


console.log(dominoes);


export {Domino};