// let btn = document.body.querySelector(".switch");
// let dmode = document.body.querySelector(".toggle");

// btn.addEventListener("click", function(){
//  dmode.classList.toggle("d-banner")
//  dmode.classList.toggle("banner")
// })

// document.querySelector(".banner").classList.remove("banner");
// document.querySelector(".banner").classList.add("d-banner");
let tl = gsap.timeline();

tl.from(".nav-head", {
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from(".nav-item", {
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})
gsap.from(".back-to-top", {
    scale:0,
    duration:1,
    delay:1
})