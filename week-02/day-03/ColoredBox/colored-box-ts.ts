'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(600,150);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600,150);
ctx.lineTo(600,450);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600,450);
ctx.lineTo(200,450);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,450);
ctx.lineTo(200,150);
ctx.strokeStyle = "orange";
ctx.stroke();