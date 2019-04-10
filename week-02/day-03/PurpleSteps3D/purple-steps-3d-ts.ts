'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


function steps(x){
    ctx.fillStyle = "purple";
    ctx.fillRect(x,x,20,20);
    ctx.strokeRect(x,x,20,20);
}

steps(0)