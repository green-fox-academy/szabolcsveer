'use strict';

// Strings again
// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeX(str: string):string{
    if(str.indexOf('x') === -1){
        return str;

    }
    str = str.replace('x',' ');
    return removeX(str);


}

console.log(removeX('xxxxxyxyxyxyxyxyxy'))