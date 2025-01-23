const { sayName, sayName1 } = require("./async")

describe("Test Callbacks", () => {

    it("should return Name after 3 secs", (doneFn) => {
        const input = "Evans"
        sayName(input, name => {
            try {
                expect(name).toBe(input)
                doneFn()
            } catch (error) {
                doneFn(error)
            }
        })
    })
})

describe('Test Promises', () => {
    it('Should return name after the specified duration', async() => {
        const input = "Hello world"
        const duration = 2000
        //return expect(sayName1(input,duration)).rejects.toBeDefined()
        //return expect(sayName1(input,duration)).resolves.toBe(input)  // then behaviour 

        // then 
        // async await 

        //    try{
        const result = await sayName1(input, duration) //result = "Hello World "
        expect(result).toBe(input)
        //    }catch(error){
        //     expect(error).toBeDefined()
        //    }
    })
})