'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

function triangleBig(x,y,length){
    if(length < 1){
        return
    }
    ctx.beginPath();
    ctx.moveTo(120, 480);
    ctx.lineTo(x + length*4,y+length*4);
    ctx.lineTo(x+length*5/2,y+length);
    ctx.lineTo(x+length,y+length*4);
    ctx.stroke();

    
   
}

triangleBig(0,0,120);


function triangle2(a,b,length2){
    // if(length < 1){
    //     return
    // }
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(240, 480);
    ctx.lineTo(a+length2*2,b+length2*4);
    ctx.lineTo(a + length2*5/2,b+length2*5);
    ctx.lineTo(a+length2*3,b + length2*4);
    // ctx.lineTo(360,480)
    ctx.stroke();

    triangle2(a + length2*2/4,b,length2)
}


triangle2(0,0,120);



