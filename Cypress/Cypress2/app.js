const btn = document.querySelector('#submitbtn')
const message= document.getElementById("message")
const myname= document.getElementById("name")
const email= document.getElementById("email")
btn.addEventListener('click', (event)=>{
    event.preventDefault()
    
    if(message.value.trim() ==''){
        message.parentElement.classList.add('invalid')
    }
    else if(myname.value.trim() ==''){
        myname.parentElement.classList.add('invalid')
    }
    else if(email.value.trim() ==''){
        email.parentElement.classList.add('invalid')
    }else{

        btn.textContent="Sending..."
        
        setTimeout(()=>{
            btn.textContent="Submit"
            btn.disabled=true
        }, 2000)
    }
    
})

message.addEventListener('change', ()=>{
    if(message.value.trim() !==''){
        message.parentElement.classList.remove('invalid')
    }
})

myname.addEventListener('change', ()=>{
    if(myname.value.trim() !==''){
        myname.parentElement.classList.remove('invalid')
    }
})

email.addEventListener('change', ()=>{
    if(email.value.trim() !==''){
        email.parentElement.classList.remove('invalid')
    }
})