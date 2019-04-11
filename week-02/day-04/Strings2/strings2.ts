'use strict';

// Strings again
// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeX(input: string):string{
    if(input.indexOf('x') === -1){
        return input;

    }
    input = input.replace('x','');
    return removeX(input);


}

console.log(removeX('xxxxxyxyxyxyxyxyxy'))