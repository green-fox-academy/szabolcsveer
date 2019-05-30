'use strict';

// const slide = document.getElementsByClassName('.middlepic')

const previous = document.querySelector('.buttonleft');
const next = document.querySelector('.buttonright');
const middlepic = document.querySelector('.middlepic');

let images = ['../img/1.jpg','../img/2.jpg','../img/3.jpg',];

let imageindex = 1;
// images[0] = new Image(100,100)
// images[0].src = "https://photoshopstar.com/media/2015/11972/scene34.jpg";
// images[1] = "https://i.pinimg.com/originals/2a/2f/8f/2a2f8f0431201e01ee2ee3b47e2de418.jpg";
// images[2] = "https://cdnb.artstation.com/p/assets/images/images/001/121/419/large/sergey-musin-sci-fi-landscape.jpg?1440523878";

previous.onclick = () => { middlepic.setAttribute('src') =  image[1]
if(imageindex > 3){imageindex = 0;  } };
next.onclick = () => {};

console.log(images);
 