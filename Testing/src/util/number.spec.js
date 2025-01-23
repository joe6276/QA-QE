const {tranformToNumber, ValidateandTranformInput} = require('./number.js')
describe("Transform",()=>{
    
it('Should Give us back a Number type  if given a string that is convertable to a number', ()=>{
    let input = "1"
    const result= tranformToNumber(input)
    expect(typeof result).toBe('number')
})



it('Should Give return NaN if given a string that is not convertable', ()=>{
    let input = "1r"
    const result= tranformToNumber(input)
    expect(result).toBeNaN()
})
})

describe("Validate and transform", ()=>{
    it("Should return an Array of numbers Given an Array of string", ()=>{
        const inputs= ['1','2','3']

        const result = ValidateandTranformInput(inputs)

        expect(result).toEqual([1,2,3])

        //  ['1','2','3'] == [1,2,3] 
    })
})