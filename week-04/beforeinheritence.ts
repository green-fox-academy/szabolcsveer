'use strict';

export{}

class Person{
  name: string;
  age: number;
  gender: string;

  introduce(){
    console.log(`Hi, I'm ${this.name},a${this.age} year old${this.gender}`);    
  }
  getGoal(){console.log('My goal is: Live for the moment!');
  }

  constructor(name:string, age:number,gender:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    
}}

class Student { 
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;
  

  getGoal(){
    console.log("Be a junior software developer.");
  }
  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }
  skipDays(numberOfDays):any{
  this.skippedDays += numberOfDays;  }

  constructor(name:string,age:number,gender:string,previousOrganization:string,skippedDays:number = 0) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
    
    
  }

}

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  getGoal(){
    console.log('Educate brilliant junior software developers.');
  }
  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}${this.level}`);
    
  }
  constructor(name:string,age:number,gender:string,level:string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
  
}

class Sponsor{
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} so far.`);
}
  hire(){
  this.hiredStudents += 1;
  }
  getGoal(){
    console.log('Hire brilliant junior software developers.');
  }

  constructor(name:string,age:number,gender:string,company:string,hiredStudents: number = 0){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }
 
}


let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person('Jane Doe',30,'female');
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME',0);
people.push(john);
let student = new Student('Jane Doe',30,'female','The School of Life',0);
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor('Jane Doe',30,'female','intemediate');
people.push(mentor);
let sponsor = new Sponsor('Jane Doe',30,'female','Google',0);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}
