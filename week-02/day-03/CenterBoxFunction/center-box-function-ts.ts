'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x: number){
    ctx.beginPath();
    ctx.fillRect(285,185,x,x);
    ctx.fill()
    ctx.stroke();
}

for (let i = 0; i < 4; i++){
drawSquare(30);

}