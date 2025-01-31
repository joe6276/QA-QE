const username = document.getElementById('username');
const password = document.getElementById('password');
const submitbtn = document.querySelector('.login-btn');
const message = document.getElementById('message');
async function loginHandler() {
    let usr = username.value;
    let pass = password.value;
    let resposne = await fetch(`http://localhost:4000/users?username=${usr}`);
    let user = await resposne.json();
    console.log(user);
    //  //validate
    if (user[0].password !== pass) return new Error("user Found");
    else {
        let paragraph = document.createElement('p');
        paragraph.textContent = 'Login Success';
        message.innerHTML = '';
        message.insertAdjacentElement('beforeend', paragraph);
    }
}
submitbtn.addEventListener('click', loginHandler);

//# sourceMappingURL=login.7c0ccee6.js.map
