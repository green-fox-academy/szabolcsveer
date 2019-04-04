'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let gfaHoursPerDay:number = 6;
let workdays:number = 5;
let semesterLengthInWeeks:number = 17;

let CodedHoursPerWeek:number = gfaHoursPerDay * workdays;
let CodedHoursPerSemester:number = CodedHoursPerWeek * semesterLengthInWeeks;
console.log("The average hours spent coding by a Greenfox attendee during a semester: " + CodedHoursPerSemester);

let WeeklyWorkHours:number = 52;
let AllWorkingHours:number = semesterLengthInWeeks * WeeklyWorkHours;
let PercentageOfCodingHoursPerSemester: number = CodedHoursPerSemester/AllWorkingHours * 100;
console.log("Greenfox students will spend coding " + PercentageOfCodingHoursPerSemester + "% on average of all working hours.");