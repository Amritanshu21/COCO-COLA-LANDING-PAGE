var one = document.querySelector("#one")
one.addEventListener("mouseenter",function(){
    this.style.color="red";
    this.style.scale="1.5";
    this.style.opacity="6";
})
var one = document.querySelector("#one")
one.addEventListener("mouseleave",function(){
    this.style.color="white";
    this.style.opacity="0.8"
    this.style.scale="1";
})

var one = document.querySelector("#two")
one.addEventListener("mouseenter",function(){
    this.style.color="red";
    this.style.scale="1.5";
    this.style.opacity="6";
})
var one = document.querySelector("#two")
one.addEventListener("mouseleave",function(){
    this.style.color="white";
    this.style.opacity="0.8"
    this.style.scale="1";
})

var one = document.querySelector("#three")
one.addEventListener("mouseenter",function(){
    this.style.color="red";
    this.style.scale="1.5";
    this.style.opacity="6";
})
var one = document.querySelector("#three")
one.addEventListener("mouseleave",function(){
    this.style.color="white";
    this.style.opacity="0.8"
    this.style.scale="1";
})



gsap.from("#nav",{
    scale:1.5,
    duration:1.1,
  delay:0.6,
    opacity:0,
})
gsap.from("#centreleft",{
    x:-500,
    opacity:0,
    duration:1.5,
    scale:1.4,
    delay:1
})
gsap.from("#one",{
    y:40,
    delay:1.4,
    opacity:0,
    scale:1.4,
    duration:1
})
gsap.from("#two",{
    y:40,
    delay:1.4,
    opacity:0,
    scale:1.4,
    duration:1
})
gsap.from("#three",{
    y:40,
    delay:1.4,
    opacity:0,
    scale:1.4,
    duration:1
})

gsap.from("#one h3",{
    y:40,
    delay:1.4,
    opacity:0,
    scale:1.4,
    duration:1
})
gsap.from("#one p",{
    y:40,
    opacity:0,
    delay:1.4,
    scale:1.4,
    duration:1
})
gsap.from("#two h3",{
    y:40,
    delay:1.8,
    opacity:0,
    scale:1.4,
    duration:1
})
gsap.from("#two p",{
    y:40,
    opacity:0,
    delay:1.8,
    scale:1.4,
    duration:1
})
gsap.from("#three h3",{
    y:40,
    delay:2.2,
    opacity:0,
    scale:1.4,
    duration:1
})
gsap.from("#three p",{
    y:40,
    opacity:0,
    delay:2.2,
    scale:1.4,
    duration:1
})
gsap.from("#centremiddle",{
    scale:2,duration:1.2
})