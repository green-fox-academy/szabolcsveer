'use strict';

const imgURL = document.querySelector('img').src="https://i.pinimg.com/originals/83/41/c0/8341c0a78e236204aef43118d619e3e3.png";
const link = document.querySelector('a').href="https://www.greenfoxacademy.com/"
// console.log(imgURL.getAttribute('src'));

const disableSecondButton = document.querySelector('.this-one')
disableSecondButton.setAttribute('disabled',true)
const replace = document.querySelector('.this-one');
replace.innerHTML ="Don't Click Me!";

