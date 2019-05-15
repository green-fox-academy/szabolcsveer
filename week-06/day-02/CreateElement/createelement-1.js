'use strict';

const asteroidList = document.querySelector('ul.asteroids');
const newAsteroid = document.createElement('li');
const newAsteroid1 = document.createElement('li');


newAsteroid.id = 'b555';
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);
newAsteroid1.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid1);

const container = document.querySelector('.container');
const heading = document.createElement('h1');
heading.textContent = 'I can add elements to the DOM!';
container.appendChild(heading);

const img = document.createElement('img');
img.src = "https://4.bp.blogspot.com/-aSULln0IUww/V0IFkCJCFEI/AAAAAAAAswY/9EXyvBK6gFUZLi5Gl0IlWDGm97Upff2owCLcB/s1600/universe.jpg"
container.appendChild(img);