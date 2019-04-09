let MapOne: any = {
    "978-1-60309-452-8":"A Letter to Jo",
    "978-1-60309-459-7":"Lupus",
    "978-1-60309-444-3":"Red Panda and Moon Bear",
    "978-1-60309-461-0":"The Lab"
}



let arranged = Object.keys(MapOne).map(function(keys:any,values:any){
    return MapOne[keys] + " (ISBN:" + keys +")";
})
console.log(arranged);

delete MapOne["978-1-60309-444-3"];
console.log(MapOne);

delete MapOne["978-1-60309-461-0"];
console.log(MapOne);

MapOne["978-1-60309-450-4"] = "They Called Us Enemy"
MapOne["978-1-60309-453-5"] = "Why Did We Trust Him?"
console.log(MapOne);

 if((478-0-61159-424-8) !== undefined){
    console.log("We found IT!")
}else{
    console.log("Nah, its not in here...")
}
 
console.log(MapOne["978-1-60309-453-5"])