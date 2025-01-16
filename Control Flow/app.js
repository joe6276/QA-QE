
// If , Else If & Else


// if(condition){
//     // Conditional Code
//     // Statement to execute if first condition is met 
//     // nested If 
// }
//  else if(condition){
// // Statements to execute id the second condition is met
//  }
// else{
//     // Statement tot execute if False
// }

let day= 'Wednesday'

if(day == "Wednesday"){
    console.log(" Today we will be Learning about CF & DOM");
}
else if(day == "Thursday"){
    console.log(" Today we eill be Learning about Events & ES6");
}
else{
    console.log(" We  will have SS & Assessement");  
}

// Switch

// switch(expression){
//     case 1:
//         //statements
//         // [break]
//     // other case
//     default:
//       // if it doesnt meet any Case above  
// }

// Switch Cases will exit:
// - End of the switch
// - It encounters a break statement
// - int encounters a return statement

let num1= 10;
let num2 =20;

let operation ="-"

switch (operation){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        return;
    case "/":
        console.log(num1 / num2);
        return;
    default:
        console.log(" Invalid operator");
        break;

}


// While & Do while

// SYNTAX
// do{
//     //statements
// }while(condition)

// while(condition){
//     //execute these statement
// }

// The body executes
// Evaluate the condition
// if True execute the while body else end the loop
// To step 2 again

let x = 0
do{
console.log('While '+x);
x++

}while(x<0)


// do{
// console.log('Its wednesday!');
// return;

// }while(day=="Wednesday")

// while(x<10){
//     console.log(x);
//     x++  
// }

// Evaluate the condition
// execute the while body
// if condition is false it will end , go to step 2



// For Loop
// let x =0;
//for(initial-Expression, condition, final-expression){
// statements
//}

// execute initial-expression (This runs only once)
// Evaluate Condition if talse- terminate else step 3
//Ececute statements
// execute final Expression
//return to step 2
let i =0
for ( ; i<=10 ; i++){
   if(i==5) continue;
   console.log(i);
   
}