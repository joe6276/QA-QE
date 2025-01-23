

function sayName(name, cb){
    setTimeout(()=>{
        cb(name)
    },1000)
}


function sayName1(message, duration){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(message)
        }, duration)
    })
}

module.exports={
    sayName,
    sayName1
}
// sayName("Evans",name=>{
//     console.log(name);
    
// })


