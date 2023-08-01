var click = document.querySelector('.open-modal-bt')
var modal = document.querySelector('.modal')
var iconclose = document.querySelector('.header i')
var itemclose = document.querySelector('.footer button')

function open()
{
    modal.classList.toggle('hide')
}

click.addEventListener('click',open)
iconclose.addEventListener('click',open)
itemclose.addEventListener('click',open)

