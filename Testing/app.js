

function doSum(numberInputs){ //['1', '2']
    const numbers=[]
    for(const numinput of numberInputs){
        validateStringNotEmpty(numinput) //check ifs string not empty => if empty throw an Error
        const number =tranformToNumber(numinput) // change to Number number/ NaN
        validateNumber(number) //check if its a number

        numbers.push(number)
    }  
   return sum(numbers) //sum
}

