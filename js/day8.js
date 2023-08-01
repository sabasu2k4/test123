var userName = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password1')
var comfirmPassword = document.querySelector('#password2')
var form = document.querySelector('form')

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error')
    small.innerText = ''
}

// check rong
function checkEmptyError(listInput){
    // cho tổng thể bằng false
    let isEmptyError = false;
    // kiem tra tung cai 
    listInput.forEach(input => {
        // chuan hoa dau vao
        input.value = input.value.trim()
        
        if(!input.value){
            // nếu có 1 ô bị bỏ trống thì isEmptyError true
            isEmptyError = true;
            showError(input,'Khong duoc de trong')
        }else{
            showSuccess(input)
        }
    });

    return isEmptyError
}
// check email
function checkEmail(input){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,'Email Invalid')
    }

    return isEmailError
}

// check lenght
function checkLenghtError(input, min, max){
    input.value = input.value.trim()
    
    // console.log(input.value.length)
    if(input.value.length < min){
        showError(input,`Phai co it nhat ${min} ki tu`)
        return true
    }

    if(input.value.length > max){
        showError(input,`Khong duoc qua ${max} ki tu`)
        return true
    }

    showSuccess(input)
    return false
}

// check xem password co trung voi comfirmPassword khong
function checkMatchpassword(passwordInput,cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value)
        showError(cfPasswordInput,'Mat khau khong trung khop')
}

form.addEventListener('submit', function(event){
    // Khi click vao se khong load lai trang
    event.preventDefault()

    let isEmptyError = checkEmptyError([userName,email,password,comfirmPassword])
    let isEmailError = checkEmail(email)
    let isUserNameLenghtError = checkLenghtError(userName,3,10)
    let isPasswordLenghtError = checkLenghtError(password,8,15)
    let isPasswordMatchError = checkMatchpassword(password,comfirmPassword)


    // neu 1 trong 4 error
    if(isEmptyError||isEmailError||isUserNameLenghtError||isPasswordLenghtError){
        //khong lam gi het
    }
    else{
        //logic, call API, ....
    }
})
