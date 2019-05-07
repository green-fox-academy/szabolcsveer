'use strict';

let map: any= {
  'eggs': 200,
  'milk': 200,
  'fish': 400,
  'apples': 150,
  'bread': 50,
  'chicken': 550

}

let below201 = Object.keys(map).filter(e => {return map[e] < 201})
console.log(below201);

let moreThan150 = Object.keys(map).filter(e => {return map[e] > 150})
// console.log(moreThan150);

for (let i=0; i<moreThan150.length; i++){
  console.log(moreThan150[i], map[moreThan150[i]]);
}
