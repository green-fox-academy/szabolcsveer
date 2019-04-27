'use strict';

/* Teacher Student
Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() */

class Student{
  learn(){
    console.log('I\'m the student and I will learn from the Teacher!');
    
  }
  question(teacher: Teacher){
    teacher.answer()
  }
}

class Teacher{

  
  teacher(student){
    student.learn()
    
  }
  answer(){
    console.log('I\'m the Teacher and I will give you an answer')
  }
}


let student:Student = new Student();
let teacher:Teacher = new Teacher();

student.question(teacher)
teacher.teacher(student)
// console.log(student)
// console.log(teacher);

