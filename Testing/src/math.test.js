// it , test ,describe
// Tripple A Approach 
// Arrange => specifying the inputs
// Act => calling the Main Logic
// Assert => Confirm if that is what you expected

const {sum}= require('./math') 

it("Should give us back the sum given an Array of Numbers", ()=>{

    const inputs= [1,2,3]

    const result = sum(inputs)

    const expectedResult= inputs.reduce((prev,cur)=> prev +cur,0)
    expect(result).toBe(expectedResult)
})


it("Should give us back the sum given an Array of Strings", ()=>{

    const inputs= ['1','2','3']

    const result = sum(inputs)
    const expectedResult= inputs.reduce((prev,cur)=> +prev + +cur,0)
    expect(result).toBe(expectedResult)
})


it("Should give us back Zero if we pass an empty Array", ()=>{

    const inputs= []

    const result = sum(inputs)
    
    expect(result).toBe(0)
})


it("Should throw an error if given an Object ", ()=>{

    const inputs={name:"john Doe"}

    const resultfn = ()=>{sum(inputs) }
    
    expect(resultfn).toThrow(/not iterable/)
})


it("Should return Sum if given a string of numbers ", ()=>{

    const inputs="125"

    const result= sum(inputs) 
    
    expect(result).toBe(8)
})

it("Should  if given a string ", ()=>{

    const inputs="125r"

    const result= sum(inputs) 
    
    expect(result).toBeNaN()
})

it("Should throw an error if given No Input ", ()=>{
    const resultfn = ()=>{sum() }
    expect(resultfn).toThrow(/not iterable/)
})