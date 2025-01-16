

//Rest and Spread

// rest - represent a x amount of items
// spread - copy


let person={
    name:" john Doe",
    age:20,
    weight:50

    /// 1000 props 
}

// copy - to a different object

let copyPerson = person // pointing to the same Adress

// New Object - Spread 

let copyPerson1= {...person}


let arr=[1,2,3,4,5]

let copyArr= [...arr]


// Destructuring - extracting some part of an object/array
//Object - Have to know the key

let {name, ...rest}= person

// console.log(x);
// A rest element must be last in a destructuring pattern
// Destructuring Array
// You will have to know the index
// a=0
let [,,, ...rest1]=arr


// console.log(rest1);


// Events
// HTML
// <button onclick="alert('Hello there')"> Click Me !</button>


// pointing to a function 

 const btnHandler=(event)=>{
      
    console.log("Button Clicked");
    console.log(event);
    
 }

 
const btn = document.querySelector('button')
// btn.onclick= btnHandler

// Cant pass multiple Function 
// removeEventListener

// AddEventListener

btn.addEventListener('click', btnHandler)
// Remove Event Listener
// setTimeout(()=>{
//     btn.removeEventListener('mouseenter', btnHandler) 
// },4000)


const form = document.querySelector('form')

form.addEventListener('submit', event =>{
    event.preventDefault()
    console.log(event);
    
    console.log("Form Submitted!!");
    
})


const div =document.querySelector('div')

div.addEventListener('click', event=>{
    console.log('DIV ClicKed!!');
    event.stopPropagation() 
}, true)

/// Delegation Events - Parents

const ul = document.querySelector('ul')

ul.addEventListener('click',event =>{

    event.target.closest('li').classList.toggle('highlight')
