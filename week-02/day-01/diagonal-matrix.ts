'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

/* 
let count: number = 4;
let emptyList: any[] = [];
let zero: number= 0;
let one: number= 1;
for (let i = 0; i < count; i++){

    for(let j = 0; count < i; j++){
    emptyList.push([0]);    
    } 
    emptyList.push([0]);
}
console.log(emptyList); */



function createMatrix(size: number): void {
    const matrix:number[][] = [];
    for(let i:number = 0; i<size; i++){
       matrix[i] = []
       for(let j:number = 0; j<size; j++){
            if(j = size - j - 1)
        matrix[i][j] = [0];
       }
    }
        console.log(matrix);
}