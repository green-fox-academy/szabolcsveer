'use strict';
abstract class Animal {
  name: string;
  age: number;
  constructor(inputName: string, inputAge: number = (Math.floor(Math.random() * 10))) {
    this.name = inputName;
	this.age = inputAge;
  };
  getName(): string {
    return this.name;
  };
  breed(): void {
  };
  scream(): void {
  };
  troll(): void {
  };
  whine(): void {
  };
}
class Reptile extends Animal {
  breed(): string {
    return 'laying eggs.'
  };
};
class Mammal extends Animal {
  breedType: string = 'pushing miniature versions out.'
  breed(): string {
    return this.breedType;
  };
};
class Bird extends Animal {
  breedType: string = 'laying eggs.'
  breed(): string {
    return this.breedType;
  };
};
let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");
console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

export{Animal}