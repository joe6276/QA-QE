
// function fuctionName(...parameters){
//     // function Body
// }
//Function Declaration
// add(23,34)

function add(num1, num2){
    //num1, num2 can only be accessed inside the function
    //return or  void
    console.log(num1 +num2);// void
    // return num1 + num2 // Returns a Number
}
// function defined using function declaration are hoisted
//  add(23,34)


 //Function Expression
 const add1 = function(num1, num2){
    return num1 + num2
 }

 //console.log(add1(12,13));
 

 // ES6 - Arrow Function
//function that takesin two parameters and return the sum
 const add2 = (num1,num2) =>  console.log(num1+num2)

 ///More than one line of code in the Function body
 const add3 = (num1,num2) =>  {
    let result= num1 +num2
    console.log(result);
 }
 //No parameter
 const greet= ()=> console.log("Hi");
 


 ///Default Parameters

 function CalculateIncome(amount=24000 , tax=16){
   let taxAmount= amount* tax /100
   console.log(taxAmount);

 }


//  CalculateIncome()
//  CalculateIncome(50000)

//Optional
function CalculateIncome1(amount, tax){
   let tx=tax===undefined? 16:tax;

    let taxAmount= amount * tx /100
     console.log(taxAmount);
 
  }

//   CalculateIncome1(100000)
//   CalculateIncome1(100000, 23)


//Rest Parameters

// let usersNumbers= prompt("Pass numbers separated by commas")// string
//  let numbers=[]
//  //convert from string to number array
// let str=usersNumbers.split(',')

// for(const text of str){
//     numbers.push(+text)
// }

// function add(numbers){
//     return numbers.reduce((acc,num)=> acc+num ,0)
// }

//rest - represent x amount of numbers
//Spread => Copy
function sum(...numbers){// array of number
    // console.log(numbers);
    
    return numbers.reduce((acc,num)=> acc+num ,0)
}

console.log(sum(12,2,3,4,5,6,7,8));

// anonymous Function
//button.addEventListener('click', ()=>{})//anonymous Function


// Callback
// Asynchronous Code
// Will be called later
// Its called by a function not us

function maths(resultHandler,sign,num1, num2){
    let result=0;
    if(sign=='Multiply'){
       result = num1*num2
    }
    if(sign=='Division'){
        result = num1/num2
     }
    resultHandler(result)
}

function printResult(messageResult, result){
    console.log(messageResult +result);
}


maths(printResult.bind(this,"The results after multiplying "),'Multiply',30,20)
maths(printResult.bind(this,"The results after Dividing "),'Division',30,20)


