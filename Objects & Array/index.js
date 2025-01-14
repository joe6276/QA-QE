
let person={
    name:" John Doe",
    age:20,
    gender:"Male",
    sayName: function(){
        console.log("Hello I am"+ this.name);
    }
}

// Dot notation
console.log(person.age);

let prop ="age"

//Bracket Notation
console.log(person[prop]);


//modify
person.age =21

//add new Prop
person.weight= 50




//delete

delete person.gender

//If prop exists

console.log("nickname" in person);

let x ="teamName"
//Copy or combine
let team={
    [x]:"Manchester United"
}

console.log(team.teamName);

let person1 = Object.assign(team, person)
// console.log(person1);
person1.name="Javascript"

// console.log(person.name);
// console.log(person1.name);


let personx={
    name:"Ivonne"
}

let personp={
    name:"Kelvin"
}

//class
class Vehicle{
    
}

//object
const mercedes= new Vehicle()

// new Keyword
// Creates an empty object {}
// Name the empty object ' this'
// Set prototypes