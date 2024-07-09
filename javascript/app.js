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
gsap.from(".nav-item", {
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

window.addEventListener("mousemove", function(details){
    let x = gsap.utils.mapRange(0, window.innerWidth, 30, window.innerWidth -500, details.clientX);
    let y = gsap.utils.mapRange(0, window.innerHeight, 30, window.innerHeight -500, details.clientY);
    gsap.to("#circle", {
        left: x,
        top: y,
        // top: details.clientY + "px",
        ease: Power1
    })
})
