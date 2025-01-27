
import path from "path"
import fs from 'fs'
import { expect,vi,it, beforeEach } from "vitest"
import {Window} from 'happy-dom'
import { showError } from "./dom"

const htmlDocPath = path.join(process.cwd(), 'index.html')
const htmDocumentContent= fs.readFileSync(htmlDocPath).toString()


const window = new Window()
const document= window.document
document.write(htmDocumentContent)

beforeEach(()=>{
    document.body.innerHTML=''
    document.write(htmDocumentContent)
})


vi.stubGlobal('document', document)

it('Should have an error paragraph',()=>{
    showError("An Error occured")
    const element= document.getElementById('error')
    expect(element.firstElementChild).not.toBeNull()
})


it('Should have an not have an error paragraph',()=>{
    
    const element= document.getElementById('error')
    expect(element.firstElementChild).toBeNull()
})

