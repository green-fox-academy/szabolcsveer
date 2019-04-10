'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let Rainbowcolors: any[] = ["red","orange","yellow","green","blue","indigo","violet"];



function drawSquares(x,y){
    ctx.beginPath();
    ctx.fillStyle = y;
    ctx.fillRect(300 - x/2,300-x/2,x,x);
    ctx.stroke();
}

for(let i = 0; i <=6; i++){
    drawSquares(600 - i* 600/7,Rainbowcolors[i])
}
