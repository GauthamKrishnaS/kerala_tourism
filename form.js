let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorMsg = document.getElementById("error-msg");
let error = document.getElementById("error");

// form.addEventListener('submit',(e)=>{
//     let message = [] 
//     if(password.value.lenght < 8){
//         message.push("Password length cannot be less than 8")
//         alert("Password length cannot be less than 8")
//     }
//     if(password.value.lenght >20){
//         message.push("Password length cannot be more than 20")
//     }
//     if(message.length > 0){
//         e.preventDefault()
//         errorMsg.innerText = message.join(', ')
//         errorMsg.style.color = "red";
//     }
// })

function validate(){

    let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if(regexp.test(email.value)){
        error.innerHTML = "valid";
        error.style.color = "rgb(122, 176, 95)";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}
