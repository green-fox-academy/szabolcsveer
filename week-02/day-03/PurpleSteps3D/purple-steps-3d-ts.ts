'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


function steps(x,y){
    ctx.fillStyle = "purple";
    ctx.fillRect(x,x,y,y);
    ctx.strokeRect(x,x,y,y);
}

let sizeOfSquare: number = 20;
let position: number = sizeOfSquare;
for(let i = 1; i < 6; i++){
    steps(position + sizeOfSquare*(i-1),sizeOfSquare*i)
    position = position + sizeOfSquare*(i-1)
}
