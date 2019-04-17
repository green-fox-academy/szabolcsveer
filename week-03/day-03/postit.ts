'use strict';

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;
  constructor(backgroundColor,text,textColor) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }

  infoOfPostIt():void{
    console.log(`This POST IT has a background color of ${this.backgroundColor} ` + `with a text of ${this.text} `+ `and the textcolor is: ${this.textColor}!`);
    
  }


}

const postItOne: PostIt = new PostIt('orange','Idea 1','blue');
const postItTwo: PostIt = new PostIt('pink','Awesome','black');
const postItThree: PostIt = new PostIt('yellow','Superb!','green');

postItOne.infoOfPostIt();