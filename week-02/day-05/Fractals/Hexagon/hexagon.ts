'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

function hexagon(x,y,len){
    if(len < 1){
    return
    }
    ctx.beginPath();
    ctx.moveTo(x + len,y);
    ctx.lineTo(x + len*3, y);
    ctx.lineTo(x + len*4,y+len*4/2);
    ctx.lineTo(x +len*3,y+len*4);
    ctx.lineTo(x+len,y+len*4);
    ctx.lineTo(x,y+len*2);
    ctx.lineTo(x + len, y);
    ctx.stroke();

    hexagon(x + len*2/3, y,len/3);
    hexagon(x + len*2/3 + len+len/3, y,len/3);
    hexagon(x + len*2/3+len+len,y+len/3+len,len/3);
    hexagon(x + len*2/3 + len+len/3,y + len*2/3 + len*2/3 + len+len/3,len/3);
    hexagon(x + len*2/3,y + len*2/3 + len*2/3 + len+len/3,len/3);
    hexagon(x , y +len/3+len,len/3);
    
}

hexagon(0,0,150);





