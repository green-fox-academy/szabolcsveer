'use strict';

// Strings again and again

// Given a string, 
// compute recursively a new string where all the adjacent chars are now separated by a *





function addStars(input:any):any{
    if(input.length === 0){
    return input
    }
    function splitter(pulsar){
        return pulsar.split('');
            
    }
    return addStars(input.slice(1,0,'').split.unshift('*'))
    
}
console.log(addStars('pulsar'))









export{}