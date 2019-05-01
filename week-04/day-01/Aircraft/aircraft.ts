'use strict';

class Aircraft{
  type: string;
  ammo: number;
  maxAmmo: number;
  baseDamage: number;
  damage: number;


  constructor(type:string,ammo:number = 0,maxAmmo:number,baseDamage:number ){
    this.type = type;
    this.ammo = ammo;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;

  }

  fight(){
    this.damage = this.ammo * this.baseDamage;
    this.ammo = 0;
    return this.damage;
    
  }

  refill(number){
    this.ammo - number > 0
    this.ammo <= number || this.maxAmmo

  }

  getType(): string{
    return this.type
  }
  getStatus(): string{
    return `Type: ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.ammo}`
  }

isPriority(): boolean{
  if(this.type === 'F16'){
    return false
  }
  return true
}


  


}


export { Aircraft}