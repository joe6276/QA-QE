
// Pure Function - side effects / predictable
// it does not change another variable on the outside
function add(n1, n2) {
    return n1 + n2
}



// Impure Function -- side effects/ not predictable
function add1(n1, n2) {
    n1 + n2 + Math.random()
}


// Impure Functions
names = []

function addNames(newName) {
    names.push(newName)
}



// Factory Function
// A Function that return a fucntion
function calculateTax(tax) {
   return function calculate(amount){
    return tax * amount
   }
}


//Income
const calculateIncomeTax= calculateTax(0.16)
const calculateVat= calculateTax(0.20)
const calculateRentalTax= calculateTax(0.25)

console.log(calculateIncomeTax(30000));
console.log(calculateVat(30000));


// ClOSURE
//Every function has Closure


// Global Scope
// Local Scope - Function Scope - All Function (var,let,const) , Block Scope -- If Else , (let, const)



// Recursion
// A function that calls itself

// Power Of => 2,3 =8


// function poweroF(x, n){
//     let result=1
//     for(i=0; i<n ;i++){
//         result*=x
//     }
//     console.log(result);
// }


function poweroF(x,n){
    if(n==1){
        return x
    }
    return x * poweroF(x, n-1)
}
console.log(poweroF(2,3)
);

// 5 = 5 * 4 *3 *2 *1
function factorial(n){
    if(n>1){
      return  n* factorial(n-1)
    }else{
        return 1
    }
}

console.log(factorial(5));


// factorial(5)
// 5 * 24 =120
// 4 * 6
// 3 * 2
// 2 * 1



cons