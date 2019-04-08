'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

// let a: string = "Sunny";
// let b: boolean = true;
// let c: number = 44;

function printParams(...args: any[]):any {
    console.log(...args);
        
}

printParams("this is a string", 23, true);


