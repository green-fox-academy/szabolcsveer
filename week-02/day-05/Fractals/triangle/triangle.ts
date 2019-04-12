'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');




function triangle(x,y,len){
    if (len < 1){
        return
    }
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + len/2, y + len);
    // the outline
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x + len/2, y + len);
    ctx.lineTo(x + len,y);
    ctx.moveTo(x + len,y);
    ctx.lineTo(x,y);
    ctx.stroke();

    triangle(x,y,len/2);
    triangle(x + len/2,y,len/2);
    triangle(x+ len/4,y+len/2,len/2);
    

    
}

triangle(0,0,600);

// function triangle2(x,y,len){
//     ctx.beginPath();
//     ctx.moveTo(x + len/4,y+len/2);
//     ctx.lineTo(x + len/2, y);
//     ctx.moveTo(x + len/2, y);
//     ctx.lineTo(x + len, y+len);
//     // ctx.lineTo(x + len,y);
//     // ctx.moveTo(x + len,y);
//     // ctx.lineTo(x,y);
//     // // the outline
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = 'black';
//     ctx.stroke();
// }
// triangle2(0,0,600);














// // the triangle
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(600, 0);
// ctx.moveTo(600,0)
// ctx.lineTo(300, 600);
// ctx.moveTo(300, 600);
// ctx.lineTo(0,0);
// ctx.closePath();

// // triangle middle
// ctx.beginPath();
// ctx.moveTo(150, 300);
// ctx.lineTo(450,300);
// ctx.moveTo(450,0)
// ctx.lineTo(300, 600);
// ctx.moveTo(300, 600);
// ctx.lineTo(0,0);
// ctx.closePath();


