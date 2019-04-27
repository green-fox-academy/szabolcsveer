'use strict';

export class Pirate{
  drunkenness:number;
  isPassedOut: boolean;
  isDead:boolean;

  constructor(drinkRum:number = 0,isPassedOut: boolean = false,isDead:boolean = false){
    this.drunkenness = drinkRum;
    this.isPassedOut = isPassedOut; 
    this.isDead = isDead;
  }
  drinkSomeRum(): void{
    if(this.isDead){
      console.log('he\'s dead');
      
    }
    this.drunkenness +=1;
  }
  howsItGoingMate(): void{
    if(this.isDead){
      console.log('he\'s dead');
      
    }
    if (this.drunkenness >= 4){
      this.isPassedOut = true;
     console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
     } 
     else{
     console.log("Pour me anudder!")
     }   
  }
  die(): void{
    this.isDead = true;
      console.log('he\'s dead');
      
    }
    brawl(x: Pirate): void{
    let randomNum: number = Math.floor(Math.random()*3);
    randomNum === 0 ? this.isDead = true : randomNum === 1 ? x.isDead = true : (x.isPassedOut = true && this.isPassedOut === true); 
    
  }


}





const firstPirate: Pirate  = new Pirate();
const secondPirate: Pirate = new Pirate();

firstPirate.brawl(secondPirate)

/* firstPirate.drinkSomeRum();
firstPirate.drinkSomeRum();
firstPirate.drinkSomeRum();
firstPirate.drinkSomeRum();
firstPirate.howsItGoingMate();
 */

console.log(firstPirate);

