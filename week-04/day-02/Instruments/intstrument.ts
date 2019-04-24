'use strict';



// import from './main'

abstract class Instrument {
  protected name: string;
  play(){
      
  };

  constructor() {
  }
}

abstract class StringedInstrument extends Instrument{
  numberOfStrings: number;
  mySound: string;
  
  sound(){
    return this.mySound;
  }
  play(){
    console.log(`${this.constructor.name}, a ${this.numberOfStrings} -stringed instrument that goes ${this.mySound}`);

  }

} 

class ElectricGuitar extends StringedInstrument{
  numberOfStrings: number;
  mySound: string;

  constructor(strings: number = 6, sound: string = 'Twang'){
    super()
    this.numberOfStrings = strings;
    this.mySound = sound;
  }

}
class BassGuitar extends StringedInstrument{
  numberOfStrings: number;
  mySound: string ;

  constructor(strings: number = 4 , sound: string = 'Duum-duum-duum'){
    super()
    this.numberOfStrings = strings;
    this.mySound = sound;
  }
  
}

class Violin extends StringedInstrument{
  numberOfStrings: number ;
  mySound: string ;

  constructor(strings: number = 4, sound: string = 'Screech'){
    super()
    this.numberOfStrings = strings;
    this.mySound = sound;
  }
}

export{ Instrument,StringedInstrument,ElectricGuitar,BassGuitar,Violin }