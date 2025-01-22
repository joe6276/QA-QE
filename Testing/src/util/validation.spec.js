const {validateNumber, validateStringNotEmpty}= require("./validation")

describe('validate Strings', ()=>{
    test("Should throw an error if input is empty ",()=>{
        let inputs=""
    
        const resultFn =()=>{ validateStringNotEmpty(inputs)}
    
        expect(resultFn).toThrow()
    })
    
    
    it("Should throw an error if input is empty ",()=>{
        let inputs="    "
    
        const resultFn =()=>{ validateStringNotEmpty(inputs)}
    
        expect(resultFn).toThrow()
    })
    
    it("Should throw an error if input is empty ",()=>{
        let inputs={}
    
        const resultFn =()=>{ validateStringNotEmpty(inputs)}
    
        expect(resultFn).toThrow(/ not a function/)
    })
    
    
    it("Should throw an error if input is empty ",()=>{
        let inputs="   "
    
        const resultFn =()=>{ validateStringNotEmpty(inputs)}
    
        expect(resultFn).toThrow(/Invalid input - must not be empty./)
    })
    
    
    it("Should throw an error if input is empty ",()=>{
        let inputs="  jose  "
    
        const resultFn =()=>{ validateStringNotEmpty(inputs)}
    
        expect(resultFn).not.toThrow()
    })
    
})
/// Validate Number
// Test Suite

describe("Validate Number",()=>{
    it("Should return number if its a number type",()=>{
        let inputs=1
    
        const result= ()=>{validateNumber(inputs)}
    
        expect(result).not.toThrow()
    })
    
    
    it("Should throw if i pass a string",()=>{
        let inputs="1"
    
        const result= ()=>{validateNumber(inputs)}
    
        expect(result).toThrow(/Invalid number input./)
    })
    
    it("Should throw if i pass a NaN",()=>{
        let inputs=NaN
    
        const result= ()=>{validateNumber(inputs)}
    
        expect(result).toThrow(/Invalid number input./)
    })
})


