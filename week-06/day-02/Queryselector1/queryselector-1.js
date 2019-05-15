'use strict'

const king = document.getElementById('b325');
console.log(king);

const businessLamp = document.getElementsByClassName('big')
console.log(businessLamp[0]);
console.log(businessLamp[1]);

const conceitedKing =[document.getElementsByTagName('div')[0],  document.getElementsByTagName('div')[1]];
window.alert(conceitedKing[0].innerHTML);
window.alert(conceitedKing[1].innerHTML);

const noBusiness = [document.getElementsByTagName('div')[0],  document.getElementsByTagName('div')[1], document.querySelector('div.b329')]
console.log(noBusiness[0]);
console.log(noBusiness[1]);
console.log(noBusiness[2]);
