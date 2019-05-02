'use strict';

import {Carrier} from './carrier';
import {Aircraft} from './aircraft'
import {F16} from './F16'
import {F35} from './F35'

let navy: Carrier = new Carrier();
let enemy: Carrier = new Carrier();
let f35: F35 = new F35(8,30)
let f16: F35 = new F16(12,50)
// for(let i = 0; i < 4; i++){
//   navy.add(new F35(8,30))
//   navy.add(new F16(12,50))
//   enemy.add(new F35(8,30))
//   enemy.add(new F16(12,50))
// }

navy.add(f16)
navy.add(f16)
navy.add(f16)
navy.add(f35)
navy.add(f35)

enemy.add(f16)
enemy.add(f16)
enemy.add(f16)
enemy.add(f35)
enemy.add(f35)

navy.fill();
enemy.fill();

navy.fight(enemy);

// console.log(navy,enemy);

console.log(navy.getStatus());
console.log(enemy.getStatus());

