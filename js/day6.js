var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var ekey = document.querySelector('.card.key p:last-child')
var elocation = document.querySelector('.card.location p:last-child')
var ewhich = document.querySelector('.card.which p:last-child')
var ecode = document.querySelector('.card.code p:last-child')
var eresult = document.querySelector('.result')

document.addEventListener("keydown",e => {
    if(e.which === 32){
        ekey.innerHTML = 'Space'
    }
    else{
        ekey.innerHTML = e.key
    }
    elocation.innerHTML = e.location
    ewhich.innerHTML = e.which
    ecode.innerHTML = e.code
    eresult.innerHTML = e.which
    alert.classList.add('hide')
    box.classList.remove('hide')
})