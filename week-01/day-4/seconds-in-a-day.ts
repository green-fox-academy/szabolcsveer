'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let secondsIn24Hours: number = (24*60)*60;
console.log(secondsIn24Hours)

let currHoursInSECONDS: number = (14*60)*60;
let currMinsInSECONDS: number = 34*60;

let secondsRemaining: number = secondsIn24Hours - (currHoursInSECONDS+currMinsInSECONDS+currentSeconds);

console.log("Seconds remaining from the given day: " + secondsRemaining);