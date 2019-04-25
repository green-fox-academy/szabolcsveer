'use strict';

import * as test from "tape";


function Anagramma(stringOne: string,stringTwo:string):boolean{
    let str1Array = stringOne.split("").sort().join("");
    let str2Array = stringTwo.split("").sort().join("");
  
    return str1Array === str2Array;

}

let myAnagramma: boolean = Anagramma('green','genre');

test('TestAnagramma',(t) =>{
    t.equal(myAnagramma,Anagramma('green','genre'));
    t.end();
})

