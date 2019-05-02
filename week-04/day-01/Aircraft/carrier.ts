'use strict';

import { Aircraft } from "./aircraft";

export class Carrier{
  carrier: Aircraft[] = [];
  ammoStorage: number;
  health: number;



  constructor(ammoStorageP: number = 2300,healthP: number = 5000){
    // this.carrier = carrierP;
    this.ammoStorage = ammoStorageP;
    this.health = healthP;
  }

add(aircraft: Aircraft): void{
this.carrier.push(aircraft);


}
// It should fill all the aircraft with ammo and substract the needed ammo from the ammo storage
fill(){
  let priority: Aircraft[] = [];
  let notPriority: Aircraft[] = [];
  let allAmmoOnAircrafts: number = 0
  for(let x = 0; x < this.carrier.length; x++){
    if(this.carrier[x].isPriority()){
      priority.push(this.carrier[x]);
    }else{
      notPriority.push(this.carrier[x]);
    }
  }
  for(let i: number = 0; i < priority.length; i++ ){
    this.ammoStorage = priority[i].refill(this.ammoStorage);
  }
  for(let i: number = 0; i < notPriority.length; i++ ){
    this.ammoStorage = notPriority[i].refill(this.ammoStorage);
  }

  if(this.ammoStorage === 0){
    console.log('Captain, I must report that we have NO more ammunition left on this ship.');
  }

}
damage(damage:number): void{
  this.health -= damage
  if(this.health < 0){
    this.health = 0;
  }
}

fight(enemy: Carrier){
  this.carrier.forEach(aircraft => enemy.damage(aircraft.fight()));
  if(enemy.health == 0){
    enemy.carrier.forEach(aircraft => this.damage(aircraft.fight()));
  }
}

getStatus(){
  if(this.health != 0){
    let totalDamage = 0;
    for(let i = 0; i < this.carrier.length; i++){
      totalDamage += this.carrier[i].ammo * this.carrier[i].baseDamage
    }
    console.log(`HP: ${this.health}, Aircraft count: ${this.carrier.length},Ammo storage: ${this.ammoStorage} Total Damage: ${totalDamage}`);
    console.log('Aircrafts:');
    for(let i = 0; i < this.carrier.length; i++){
      console.log(this.carrier[i].getStatus()); 
    }  
  }
  else{
    console.log('It\'s dead Jim :(');
    
  }
  
}

}



