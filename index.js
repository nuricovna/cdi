document.querySelector(".nav_submenu").addEventListener("click", function(event) {
    event.preventDefault();
    // console.log(123)
    // this.classList.add('test');
    
    let submenu = document.querySelector(".nav__sub");
    submenu.classList.toggle('open-sub');
})


