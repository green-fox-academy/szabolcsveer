"use strict";

import { Pirate } from "./pirate";

class Ship {
  crew: Pirate[] = [];

  // constructor(crew){
  //   this.crew = crew;
  // }

  fillShip(): void {
    let num: number = Math.floor(Math.random() * 6);
    for (let i: number = 0; i < num; i++) {
      this.crew.push(new Pirate());
    }
  }
  promoteCaptain(): void {
    Math.floor(Math.random() * 3);
  }
}

let Ship1: Ship = new Ship();
Ship1.fillShip();
console.log(Ship1);
