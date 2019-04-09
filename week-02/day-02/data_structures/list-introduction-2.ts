let List_A: any[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

let List_B: any[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

console.log(List_A.includes("Durian"));

List_B.splice(3,1);
console.log(List_B);

List_A.splice(4,0,"Kiwifruit")
console.log(List_A);

if(List_A.length > List_B.length){
    console.log("List_A is bigger than List_B");
}else{
    console.log("List_B is bigger than List_A");
}

console.log(List_A.indexOf("Avocado"));
console.log(List_B.indexOf("Durian"));


List_B.push("Passion Fruit","Pummelo");

console.log(List_B);

console.log(List_A[2]);