let myNewMap: any = {
    97:"a",
    98:"b",
    99:"c",
    65:"A",
    66:"B",
    67:"C"


};

if(Object.keys(myNewMap).length === 0){
    console.log("This is an empty Map!");
}else{
    console.log("This map has already got something in it.")
}

console.log(Object.keys(myNewMap));

console.log(Object.values(myNewMap));

myNewMap[68] = "D";

console.log(Object.keys(myNewMap).length)

console.log(myNewMap[99]);

delete myNewMap[97];

console.log(myNewMap[100]);

myNewMap = {};

console.log(myNewMap);