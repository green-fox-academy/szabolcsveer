'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


let sizeofs: number = 40;
let pos: number = 0;

for(let i = 0; i < 10; i ++){
    
    for(let j = 0; j < 10; j ++){
    }    

    ctx.strokeRect(pos+sizeofs,pos+sizeofs,sizeofs,sizeofs);
}








// export{}