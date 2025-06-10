
let navbar = document.querySelector("#header");

document.addEventListener("scroll", ()=>{
    let scrolltop = window.scrollY;

    if(scrolltop > 0){
        navbar.classList.add('rolar');
    }
    else{
        navbar.classList.remove('rolar');
    }
})

let btnMenuMob = document.querySelector("#btn-menu-mob");
let line1 = document.querySelector('.line-menumob-1');
let line2 = document.querySelector('.line-menumob-2');
let menuMobile = document.querySelector('#menu-mobile');

btnMenuMob.addEventListener("click", () => {
    line1.classList.toggle('active1');
    line2.classList.toggle('active2');
    menuMobile.classList.toggle('open');

});
