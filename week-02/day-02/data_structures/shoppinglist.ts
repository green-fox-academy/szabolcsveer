'use strict';



let shoppingList: any = {
  1: 'eggs', 2: 'milk', 3: 'fish', 4: 'apples', 5: 'bread', 6: 'chicken'
}

console.log(`We have ${(Object.values(shoppingList).includes('milk')) ? '': 'no'} milk on our list!`);
console.log(`We have ${(Object.values(shoppingList).includes('Bananas')) ? '':'no'} Bananas on our list!`);
