var opened = document.querySelector(".search-button");

opened.addEventListener("click" , function(){
    this.parentElement.classList.toggle("open");
    this.previousElementSibling.focus();
})
