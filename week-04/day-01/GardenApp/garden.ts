'use strict';

export{}
import {Tree} from './tree';
import {Flower} from './flower';
import {Plants} from './plants';



class Garden{
  flowers: Flower[] = [];
  trees: Tree[] = [];
  
  addFlowers(flower:Flower):void{
    this.flowers.push(flower);
  }
  addTrees(tree:Tree):void{
    this.trees.push(tree);
  }

  waterPlants(water){
    let divisor: number = water/(this.flowers.length + this.trees.length)
    this.flowers.forEach(i => {
      i.waterFlowers(divisor);
      
    });
    this.trees.forEach(i => {
      i.waterTrees(divisor
        );
    } )

  }



}

let kiskert: Garden = new Garden();
kiskert.addFlowers(new Flower(5,0.75,'blue'));
kiskert.addFlowers(new Flower(5,0.75,'yellow'));
kiskert.addTrees(new Tree(10,0.4,'purple'));
kiskert.addTrees(new Tree(10,0.4,'orange'));

console.log(kiskert);
kiskert.waterPlants(40);
console.log(kiskert);



// let newflower1 = new Flower(5,0.75,'blue');
// console.log(newflower1);

/*
let newflower2 = new Flower('virag2','yellow')
let newTree1 = new Tree('fa1','purple')
let newTree2 = new Tree('fa2','orange')
console.log(newflower1);
console.log(newflower2);
console.log(newTree1);
console.log(newTree2);
 */