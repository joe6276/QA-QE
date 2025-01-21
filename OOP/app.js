//object - Creating new ones
let person={
    name:"John Doe"
}


//Function Factories

// function makeperson (name){
// return {
//     name
// }
// }

// we want 10 people

//Classes

class Person{
    // properties and Methods
     name=""
     #password="Secret" 
    //initializing any prop/method
    constructor(name){
        this.name= name
    }
    // prop

    talk(){ // method
        console.log(this.name+" is Talking.."); 
    }

    login(){
        if(this.name=='Samuel' && this.#password=="Secret"){
            console.log("User logged In");
            
        }else{
            console.log("Invalid Credentials");
            
        }
    }

    
}
const samuel = new Person("Samuel") // samuel=> Constructor/ Method => Object 
const Ivonne = new Person("Ivonne")

// New Keyword
// Create an Empty Object =>{}
// Point this Keyword to the Empty Object (let this = {})
// return the Object
// Prototypes => Parents

// console.log(samuel.name);
//  samuel.login()
// console.log(samuel);

// Access Modifiers
// Public 
//Private => Symbol()



class Vehicle{
    name=""
    constructor(name){
        this.name= name
    }
    #speed(){
        console.log("Speed at 80KPH");
        
    }
    hoot(){
        console.log("Hooting... ");
        
    }
}
// extends means Inherit
// implements must follow a ceartain Skeleton/ Structure

class Lorry extends Vehicle{

    constructor(name){
        // its not possible to use this keyword before calling the Super method
        // super=> willcall the parent constructor
        // for a child to have a constructor it mst call the parent constructor.
        super(name)
    }
    loadCargo(){
        console.log("Loading Cargo");
        
    }
    speed(){
        console.log("Speed at 30KPH");
    }
}

class Car extends Vehicle{
    my=""
    constructor(name, year){
        super(name)
        this.my=year
    }
    carpPassengers(){
        console.log("Carrying passengers..");
    }
    speed(){
        console.log("Speed at 180KPH");  
    }
}

// const l = new Lorry("Mercedes")
// const c = new Car("Volvo", 2022)
// l.speed()
// l.loadCargo()
// console.log(l.name);


// c.speed()
// console.log(c.name);
// console.log(c.my);
// c.carpPassengers()


class Merc extends Car{
    constructor(name, year){
        super(name, year)
    }

    //props/ methods
}

const gle= new Merc("GLE", 2020)
gle.carpPassengers()
gle.hoot()

// Levels of Inheritance
// Inherit from only one Class
 
// Mixin =>