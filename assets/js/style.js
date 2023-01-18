let name=document.querySelector("#name");
let email=document.querySelector("#email");
let password=document.querySelector("#password");



name.addEventListener('keyup',checkName);
email.addEventListener('keyup',checkemail);
password.addEventListener('keyup',checkpassword);

// a-z = a to z
// A-Z = A to Z
// 0-9 = 0 to 9
// \W = !@#$%....
function showPassword(){
    let click1=document.querySelector("#click1");
    let click2=document.querySelector("#click2");

    if(password.type === 'password'){
        password.type = "text";
        click1.style.display="block";
        click2.style.display="none";
    }else{
        password.type="password";
        click1.style.display="none";
        click2.style.display="block";
    }
}

function checkName(){
    let str=name.value;
    let reg=/^[a-zA-Z\s]+$/;   

    if(!reg.test(str)){
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('is-invalid');
    }
}

function checkemail(){
    let str=email.value;
    let reg=/^([a-zA-Z0-9_\-]+)@([a-z]+)\.([a-z]{2,5})+$/;   

    if(!reg.test(str)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
}

function checkpassword(){
    let str=password.value;
    let reg=/^[a-zA-Z0-9\W]{6,20}$/;   

    if(!reg.test(str)){
        password.classList.add('is-invalid');
    }else{
        password.classList.remove('is-invalid');
    }
}