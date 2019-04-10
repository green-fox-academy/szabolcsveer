'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]



function steps(x){
    ctx.fillStyle = "purple";
    ctx.fillRect(x,x,20,20);
    ctx.strokeRect(x,x,20,20);
}
for(let i = 0; i < 19; i++){
    steps(20*i)    
}





 



