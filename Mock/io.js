import {promises as fs} from 'fs'
import path from 'path'


export function writeData(data, filename){
     var storagePath= path.join(process.cwd(), 'data', filename)
     return fs.writeFile(storagePath,data) // Promise of Undefined
}


writeData("Hello there", 'app.txt')