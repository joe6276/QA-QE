const {validateNumber,validateStringNotEmpty}= require('./validation')
function tranformToNumber(value){
    return +value
}

function ValidateandTranformInput(numberInputs){
    const numbers=[]
    for(const numinput of numberInputs){
        validateStringNotEmpty(numinput) //check ifs string not empty => if empty throw an Error
        const number =tranformToNumber(numinput) // change to Number number/ NaN
        validateNumber(number) //check if its a number
        numbers.push(number)
    }  
   return numbers

}

module.exports={
tranformToNumber,
ValidateandTranformInput
}


// Js - Unary Plus  +23  => converts a string to a Number 
// '23e' => 23e 
// two outputs => '23' =23
        //     => '23e' => NaN