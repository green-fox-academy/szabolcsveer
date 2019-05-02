'use strict';

import {Aircraft} from './aircraft'

export class F16 extends Aircraft{
  constructor(maxAmmo: number,baseDamage: number){
    super('F16',0,8,30)

}
}


// // let f16 = new Aircraft('F16',8,8,30);
// f16.fight();
// console.log(f16)
