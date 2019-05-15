'use strict';

const para = document.querySelectorAll('p');
const lastP = [...para].pop();
// console.log(para.classList.value);
const apple = document.querySelector('apple');
console.log(lastP.innerHTML);
console.log(lastP.classList.contains('dolphin'));
const firstP = [...para].shift();
lastP.innerHTML = 'pear';
console.log(firstP.innerHTML)
console.log(firstP.classList.contains('apple'));
firstP.innerHTML = 'dog';
// innerHTMLs swapped in last and first indices
console.log(...para);

// make apple red
firstP.classList.add('red');
console.log(firstP);
// changed ballons shape
para[1].style.borderRadius = '0';

