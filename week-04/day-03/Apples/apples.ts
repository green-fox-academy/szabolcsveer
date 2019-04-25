'use strict';

class Apple{
    getApple(){
        return 'apple';
    };
}

import * as test from "tape";

test('Apple Test', (t) =>{
    let alma = new Apple();
    t.equal('apple',alma.getApple());

    t.end();
});

