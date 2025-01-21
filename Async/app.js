


// const getUser=cb=>{
//     setTimeout(()=>{
//        cb({name :"Bob"})
//     }, 2000)
// }

// getUser(user=>{
//     console.log(user.name);

// })



const btn = document.querySelector('button')

// function TrackMe(){
//     navigator.geolocation.getCurrentPosition(
//         posData=>{ 
//             setTimeout(()=>{
//                 console.log(posData);
//             }, 3000)

//         }, error=>{
//             console.log(error);

//         }
//     )
// }

// Callback hell

// ureadable Code
// Untestable  code
// Unmantainable code

function getLocation() {
   return  new Promise((resolve, reject) => { // Take in a CB fucntion which takes in two Parameters
        //reesolve - Handles success case
        // reject handles erorr case
        navigator.geolocation.getCurrentPosition(
            posData => {
                resolve(posData)
             },
            error => { 
                reject(error)
            }
        )
    })
}


function myTimer(duration){
    const promise= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Timer Done !"); 
        },duration)
    })
    return promise;
}

// function TrackMe(){
//     let location
// getLocation().then(res=>{
//     location=res; // pending(ongoing) , Fulfilled(success) , Error(error) => fulfilled
//     return myTimer(3000) // Fulfilled  to pending
// })

// // Catches Errors from the promises prior to the catch block
// // Catch does not stop execution
// // It can take the promise back to pending (Return Statement)

// .then(timerOutput=>{
//     console.log(timerOutput, location);
// })
// .catch(error=>{
//     console.log(error);
//     return "Hello" // Error to Pending 
// }).finally(()=>{
//     console.log("Done!");
    
// })
// }


// Might not like Chaining ( a Lot )
// Running multiple times 


//  Async AWait
// it is used only in functions
// use async keyword
// We use await keyword to wait for resolve or fails
// mode readable
// You use Try/Catch = > Catch - error

async function TrackMe(){
 try {
    let posData= await getLocation()
    let posData1= await getLocation()
    let Timer = await myTimer(2000)
    console.log(Timer, posData, posData1);
 } catch (error) {
    console.log(error);
    
 }
    
}
btn.addEventListener('click', TrackMe)





// E-commerce

// Json- server

// User and Admin
// Admin 
//Login => Hardcode Email and Password => db.json
// Add items
// Update
//delete


// User
//Login & Register
// Shop
// Add to Cart
// Remove / Update the Cart
// Calculate Total
// Memory - 2 items 

// Checkout => Displa
// Validations
// Nice UI
///Deadline Wednesday 
