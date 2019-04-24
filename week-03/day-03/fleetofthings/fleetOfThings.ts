'use strict';

import { Thing } from './things';
import { Fleet } from './fleet';

let fleet = new Fleet();
let newThing1: Thing = new Thing('Get milk');
let newThing2: Thing = new Thing('Remove obstacles');
let newThing3: Thing = new Thing('Stand up');
let newThing4: Thing = new Thing('Eat lunch');

newThing3.complete();
newThing4.complete();

fleet.add(newThing1,newThing2,newThing3,newThing4);

// console.log(fleet.getThings());

for(let i = 0; i < fleet.getThings().length;i++){
  if(fleet.getThings()[i].getCompleted() === true){
    console.log(`[x] ${fleet.getThings()[i].getName()}`)
  }else{
    console.log(`[ ] ${fleet.getThings()[i].getName()}`)
  }
}


/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */