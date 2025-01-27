import { vi, expect, it} from "vitest"
import { sendDataRequest } from "./post"


const testResponseData={test:"John Doe"}
const testFetch= vi.fn((url, options)=>{
    return new Promise((resolve,reject)=>{
            if(typeof options.body !=='string'){
                return reject('Not a string')
            }
        const testResponse={
            ok:true,
            json: ()=>{
               return  new Promise((resolve,reject)=>{
                    resolve(testResponseData)
                })
            }
        }
    
        resolve(testResponse)
    })
})



vi.stubGlobal('fetch' , testFetch)

it("should return a response", ()=>{
    const  testData={test:"test"}

    expect(sendDataRequest(testData)).resolves.toEqual(testResponseData)
})

it('Body must be a  string', async()=>{
    const  testData={test:"test"}
    let errorResponse
    try {
        await sendDataRequest(testData)

    } catch (error) {
        errorResponse=error
    }

    expect(errorResponse).not.toBe("Not a string")
})