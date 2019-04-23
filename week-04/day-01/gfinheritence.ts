'use strict';

import { log } from "util";
import { stringify } from "querystring";

export{}

class Person{
  name: string;
  age: number;
  gender: string;

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`);
  }
  getGoal(){
    console.log('My goal is: Live for the moment!');
  }
  constructor(name:string = 'Jane Doe',age:number = 30,gender:string = 'female'){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student extends Person{
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
  constructor(name?:string,age?:number,gender?:string,previousOrganization:string = 'This school of Life',skippedDays:number = 0) {
    super(name,age,gender)
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
    
}}

class Mentor extends Person {
  
  level: string;

  getGoal(){
    console.log('Educate brilliant junior software developers.');
  }
  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}${this.level}`);
    
  }
  constructor(name?:string,age?:number,gender?:string,level:string = 'intermediate') {
    super(name,age,gender)
    
    this.level = level;
  }
  
}

class Sponsor extends Person{
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

  constructor(name?:string,age?:number,gender?:string,company:string = 'Google',hiredStudents: number = 0){
    super(name,age,gender);
    
    this.company = company;
    this.hiredStudents = 0;
  }
 
}

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  addStudent(Student: Student): void{
    this.students.push(Student);
  }
  addMentor(Mentor: Mentor): void{
    this.mentors.push(Mentor);
  }
  info(){
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);    
  }
constructor(name?:string,students?:Student[],mentors?:Mentor[]){
  this.name = name;
  this.students = [];
  this.mentors = [];
}
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

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

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();



