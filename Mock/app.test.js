import { expect, it, vi } from "vitest";
import { generateReport } from "./app";
// jest jest.fn()

it("should call the function passed", ()=>{
    // input should be a function
    ///spies
    // Wrappers around functions or empty replacements for fuction s
    // that allow you track if and how a function was called

     let Logger= vi.fn()

     generateReport(Logger)

     expect(Logger).toBeCalled()
})