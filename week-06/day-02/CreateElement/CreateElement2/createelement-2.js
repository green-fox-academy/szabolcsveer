const king = document.querySelector('ul');
// console.log(king)
king.remove('li')

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

const body = document.querySelector('body');
const newUl = document.createElement('ul');
body.appendChild(newUl);
console.log(newUl)

for(let i=0;i < planetData.length;i++){
    const newLi = document.createElement('li');
    newLi.textContent = planetData[i].content;
    const ul = document.querySelector('ul');
    newLi.className = planetData[i].category;
    if(planetData[i].asteroid){
      ul.appendChild(newLi);
    }
    
}
