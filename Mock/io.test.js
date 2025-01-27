
import { writeData } from "./io";
import {expect,it, vi} from 'vitest'
import {promises as fs} from 'fs' // mock


// Mocks
// Are a replacement for an API that may provide some test-specific behaviour instead of the real behaviour.\

vi.mock('fs'); // vitest will hoist
vi.mock('path', ()=>{
    return{
        default:{
            join: (...args)=>{
                return args[args.length -1 ]  //filename
            }
        }
    }
})

it('', ()=>{
    
})

// it("Shouldcall the writeFile ", async()=>{
    
//     let tesdata= " hello There"
//     let testFile= 'test.txt'

//     // expect(writeData(tesdata, testFile)).resolves.toBeUndefined()
//     // We are working with production data - we will have the real data + data from tests
//     // we dont ant to have data from test
    
//    await writeData(tesdata,testFile)

//     expect(fs.writeFile).toBeCalled()

//     // to see if a filename was passed - argument passed to writefile

// })


// it("Shouldcall the writeFile  with the filename ", async()=>{
    
//     let tesdata= " hello There"
//     let testFile= 'test.txt'
    
//     await writeData(tesdata, testFile)

//     expect(fs.writeFile).toBeCalledWith(testFile, tesdata)

//     // to see if a filename was passed - argument passed to writefile

// })