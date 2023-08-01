var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var removeAll = document.querySelector('.btn-remove')
var tags = ['Nodejs','Reactjs']

function render(){
    // cho thẻ ul rỗng
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>${tag}
        <i class="fa-solid fa-xmark" onclick = "removeTag(${i})"></i>
    </li>`
    }
    // thêm input vào content (thẻ ul)
    content.appendChild(input)
    input.focus()
}
function addTags(){

}

// gọi hàm
render()

//thêm sự kiện (vd: click,keydown,...)
input.addEventListener('keydown', function(event){

    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})

function removeTag(index){
    // xóa phần tử
    tags.splice(index,1)
    // phải render lại
    render()
}

removeAll.addEventListener('click', function(){
    // cho mảng rỗng
    tags = []
    // render lại
    render()
})