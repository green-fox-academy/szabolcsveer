'use strict';

class Tree{
    type: string;
    leafColor: string;
    age:number;
    sex:string;
    isEvergreen: boolean;


    constructor(type:string,leafColor:string,age:number,sex:string,isEvergreen:boolean){
      this.age = age;
      this.type = type;
      this.leafColor = leafColor;
      this.sex = sex;
      this.isEvergreen = isEvergreen;
    }

    giveMeInfoAboutTree(): void{
      console.log(`This tree is ${this.sex}`+' ' +`and ${this.age} old ` + `has a type of ${this.type}`+ `color of ${this.leafColor}` + `which is ${this.isEvergreen}`);
      
    }
}

const myFirstTree: Tree = new Tree('oak','green',88,'female',false)
myFirstTree.giveMeInfoAboutTree();