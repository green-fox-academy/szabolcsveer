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

  fight(): number{
    this.damage = this.ammo * this.baseDamage;
    this.ammo = 0;
    return this.damage;
    
  }

  refill(ammoAmount: number): number{
    let freeSlots: number = this.maxAmmo - this.ammo
    if(ammoAmount <= 0){
      return 0
    }
    if (ammoAmount < freeSlots){
      this.ammo += ammoAmount
      return 0
    }else{
      this.ammo = this.maxAmmo
    return ammoAmount - freeSlots
  }}

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