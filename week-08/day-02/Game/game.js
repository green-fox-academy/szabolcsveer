'use strict';

const createcandiesBtn = document.querySelector('.create-candies');
const lolliesBtn = document.querySelector('.buy-lollypops');
const candyMachineBtn = document.querySelector('.candy-machine');

const candies = document.querySelector('.candies');
const lolly = document.querySelector('.lollypops');

let counter = 0;
function candyCounter(){
  counter += 100;
  candies.innerHTML = counter;
}
createcandiesBtn.addEventListener('click', candyCounter);

function buyLolly(){
  if(counter >= 100){
    counter -= 100
    candies.innerHTML = counter;
    lolly.innerHTML += "🍭";
  }
}

lolliesBtn.addEventListener('click', buyLolly);

function generateLollyPerSec(){
  if(Array.from.lolly % 10 === 0){

  }

}

setInterval(() => {
  counter += 0.1 * counter


  
},1000)
