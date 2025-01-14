let names =["Evans","Ivonne", "Keya", "jenniffer", "Samuel"]

for(const name of names){
    //Values
    //console.log(name); 
}
for(const index in names){
    //index
    //console.log(names[index]);
}  

let text= "bdfsjhbdfsjbdsfjc"/// Array Like

for(const char of text){
    //Values
    //console.log(char); 
}

//push
names.push("Alex")

//Unshift
names.unshift("Kelvin")


// console.log(names);

//pop
let x =names.pop()
//shift
names.shift()

// console.log(names);
//Splice
names.splice(0,0, "Vincent", "Johnson", "Brian")

//fill
// names.fill("T2G")
// console.log(names);

//Slice

console.log(names.sort());


//Sort this array
[{name:"John",age:20}, {name:"Jane",age:20}]
//Filter - more than one
//console.log(names.filter(x=>x.includes('e')));

//Find -only one (first one )
console.log(names.find(x=>x.includes('e')));

let numbers=[1,2,3,4,5,6,[1,2,3]]

// console.log(numbers.map((x,i)=>x*5));
numbers=numbers.flat()


console.log(numbers.findIndex(x=>x%2==0));

//Join -return string
// Split - Array
console.log(numbers.join('---'));
//
//Give me the sum of the prices (try chaining methods) 
//[{price: 10.99}, {price: 5.99}, {price: 29.99}]


