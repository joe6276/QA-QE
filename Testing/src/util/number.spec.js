
const {tranformToNumber} = require('./number.js')

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