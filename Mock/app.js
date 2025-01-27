
function Logger(data){
    console.log(data); // side effect
    
}

export function generateReport(logfn){
let data="test Data"

if(logfn){
    logfn(data)
}
return data
}

// we care mostly if the function passed was called
