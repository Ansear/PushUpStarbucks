document.addEventListener("DOMContentLoaded",function(){

    let hamburger = document.querySelector(".hamburger")
    let menu = document.querySelector(".nav-list")
    let logo = document.querySelector(".logo")
    let nav = document.querySelector(".navbar")
    hamburger.addEventListener("click",function(){
        menu.classList.toggle("show")
        hamburger.classList.toggle("close")
        logo.classList.toggle("hidden")
        nav.classList.toggle("nav")
    })

    let img = document.querySelector("#dere")
    let t1 = document.querySelector("#t1")  
    let t2 = document.querySelector("#t2")
    let t3 = document.querySelector("#t3")
    let title = document.querySelector("#title")
    let p = document.querySelector(".text")
    let cir = document.querySelector(".circle")
    t1.addEventListener("click",function(){
        img.src ="./img/img1.png"
        title.style.color="#0a694b"
        title.textContent = "Grean Tea Frappuccino"
        p.textContent = "Bebida licuada de Té matcha, mezclado con jarabe clásico, hielo y leche de tu preferencia, terminada con crema batida."
        cir.style.backgroundColor ="#0a694b"
    })
    t2.addEventListener(("click"),function(){
        img.src ="./img/img2.png"
        title.style.color="#ecccd4"
        title.textContent = "Fresa Cream Frappuccino"
        p.textContent = "Una nueva forma de tomar una bebida frappé de fresa, mezclada con hielo y leche, terminada con crema batida y salsa de fresa."
        cir.style.backgroundColor ="#ecccd4"
    })
    t3.addEventListener("click",function(){
        img.src ="./img/img3.png"
        title.textContent = "Dolce Canela Latte Helado"
        title.style.color="#7e1e63"
        p.textContent = "Refrescante mezcla tropical que combina el sabor del mango dulce y el exotico dragonfruit, con extracto de café verde y terminada con trozos de dragonfruit."
        cir.style.backgroundColor ="#7e1e63"
    })
    
})
