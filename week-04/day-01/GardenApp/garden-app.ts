'use strict';

export{}

class Garden{
  flowers: Garden[];
  trees: Garden[];
  color: string;

  addFlowers(Flower:Garden):void{
    this.flowers.push(Flower);
  }
  addTrees(Tree:Garden):void{
    this.trees.push(Tree);
  }
  constructor(flower,tree,color){
    this.flowers = [];
    this.trees = [];
    this.color = color;
  }
}


let newflower1 = new Garden('kardvirag','','kek')

console.log(newflower1);


