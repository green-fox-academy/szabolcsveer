'use strict';

import * as test from "tape";

function countLetters(string:string){
    let letters = string.split('')
    let unique = letters.filter((v,i,a) => a.indexOf(v) === i);
    let myObject = {}
    
    for(let i = 0; i < unique.length; i++){
        myObject[unique[i]] = 0;   
    }
    for (let j = 0; j < letters.length; j++){
        myObject[string[j]]++
    }
    console.log(myObject);
}

let resultObject = countLetters('Hello');

test('TestLettersCounter',(t) =>{
    t.equal(resultObject,countLetters('Greetings'));
    t.end();
})

test('TestFor',(t)=> {
    let newObject = resultObject;
    t.deepEqual(newObject,resultObject);
    t.end();
}   
)

