const { Person } = require("./Person")


//Initialization
/// beforeEach
// beforeAll

// Clean ups
// afterEach
// afterAll 
const input ="Dominic"
beforeEach(()=>{
    dom=  new Person(input)   
})

beforeAll(()=>{
    let dom = new Person(input);
})

// afterEach(()=>{
//     console.log('After Each');
    
// })

// afterAll(()=>{
//     console.log('After All');
    
// })
test("Should Update Name",()=>{
    const input2="Alex"
    dom.updateName(input2)
    expect(dom.name).toBe(input2)
})


test("Should create an instance and name prop",()=>{
    expect(dom.name).toBe(input)
})




test("Should have property Name",()=>{
   
    expect(dom).toHaveProperty("name")
})


test("Should have property name even after Deleting",()=>{
    dom.deleteName()
    expect(dom).toHaveProperty("name")
})