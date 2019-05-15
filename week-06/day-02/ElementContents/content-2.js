'use strict';

const list =  ['apple', 'banana', 'cat', 'dog'];

const li = document.querySelectorAll('li');
console.log(li);
for(let i=0; i < list.length;i++){
  li[i].innerText = list[i];
}

const ul = document.querySelector('ul');

ul.setAttribute('style','background-color: limegreen');
