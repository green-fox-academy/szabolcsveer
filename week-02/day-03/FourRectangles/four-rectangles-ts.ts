'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function rect(x:any,y:any,a:any,b:any){
    ctx.beginPath();
    ctx.fillRect(x,y,a,b);
    
    ctx.stroke();
}
let colors = ["blue","red","green","purple"]



for (let i = 1; i < 5; i ++){
    ctx.fillStyle = colors[i-1];
    rect(i*100,i*50,i*20,i*20)
    
}

