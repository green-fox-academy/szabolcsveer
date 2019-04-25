'use strict';

import * as test from "tape";



let numberList: number[] = [3,5,6,7,4,2,1,9,];
let emptyList: number[] = [];
let oneElement: number[] = [5];

class Sum{
    sum(numberList):number[]{
    let sum: number[] = numberList.reduce((a,b) => a+b); 
    return sum;
    }
    
}

let newSum = new Sum();
let result = newSum.sum(numberList)

test('TestSum',(t) =>{

    t.equal(result,newSum.sum(numberList));
    t.end();
})

test('testOnEmpty',(t) =>{

    t.notEqual(result,emptyList);
    t.end();
})

test('testOnSingle',(t) =>{

    t.notEqual(result,oneElement);
    t.end();
})


