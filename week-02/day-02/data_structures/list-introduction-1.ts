let myList: string[]= [];
console.log(myList.length);
myList.push("William");
if (myList == undefined){
    console.log(myList + "is an empty list!")
}else{
    console.log("It's got something!")
}
myList.push("John");
myList.push("Amanda");
console.log(myList.length);
console.log(myList[2]);

for(let i = 0; i < myList.length; i++){
    console.log(myList[i]);
}

for(let i = 0; i < myList.length; i++){
    console.log(i+1+"."+ myList[i]);
}

myList.splice(1,1)

console.log(myList.reverse());

myList = [];



console.log(myList);