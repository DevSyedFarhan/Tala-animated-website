function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

let menu = document.querySelector("#nav-part-2 i")
let fullNav = document.querySelector("#full-scr-nav")
let nav = document.querySelector("#nav")
let light = document.querySelector("#nav-part-2 #light")


let flag = 0;
menu.addEventListener("click", function(){
    if(flag == 0){
        fullNav.style.top = "0%";
        nav.style.color = "#ededed";
        nav.style.background = "transparent";
        nav.style.borderRadius = "0px";
        nav.style.backdropFilter = "none";
        nav.style.border = "none";
        flag++;
    }else{
        fullNav.style.top = "-100%";
        nav.style.color = "#141414";
        nav.style.background = "rgba(255, 255, 255, 0.2)";
        nav.style.borderRadius = "10px";
        nav.style.backdropFilter = "15px";
        nav.style.border = "1px solid rgba(255, 255, 255, 0.3)";
        flag--;
    }
})

let tl = gsap.timeline()

tl.from("#page1 h1",{
    opacity:0,
    y:50,
    duration:1,
    ease : Expo.easeInOut,

})

tl.from("#page1 h2",{
    opacity:0,
    y:50,
    duration:1,
    delay: "-0.5",
    ease : Expo.easeInOut,

})

tl.from("#page1 h3",{
    opacity:0,
    y:50,
    duration:1,
    delay: "-1",
    ease : Expo.easeInOut,

})

gsap.to("#page2 #img",{
    scale:0.95,
    duration:0.5,
    scrollTrigger:{
        trigger: "#page2 #img",
        scroller: "#main",
        scrub:1,
        start: "top 90%",
        end: "top 8%",
    }
})

gsap.to("#page2 #text h1",{
    rotateX : 0,
    opacity : 1,
    ease : Expo.easeInOut,
    scrollTrigger : {
        trigger : "#text h1",
        scroller :"#main",
        scrub : 3,
        start : "top 80%",
        end : "top 40%",
    }
})

gsap.to("#img img", {
    rotate : 45,
    scale:1.3,
    duration : 1,
    ease : Expo.easeInOut,
    scrollTrigger : {
        trigger : "#img img",
        scroller : "#main",
        scrub : 5,
        start: "top 70%",
        end: "top 5%",
    }
})


let slide1 = document.querySelectorAll(".slide-1 h1")

slide1.forEach(function(elem){
    gsap.to(elem,{
        transform : "translate(-40%)",
        duration: 4,
        ease : Expo.easeInOut,
        scrollTrigger: {
            trigger: "#page6",
            scroller : "#main",
            scrub : 5, 
        }
    })
})

let slide2 = document.querySelectorAll(".slide-2 h1")

slide2.forEach(function(elem){
    gsap.to(elem,{
        transform : "translate(-60%)",
        duration: 4,
        ease : Expo.easeInOut,
        scrollTrigger: {
            trigger: "#page6",
            scroller : "#main",
            scrub : 5, 
        }
    })
})

gsap.to("#text-page-7 h1",{
    rotateX : 0,
    opacity : 1,
    ease : Expo.easeInOut,
    scrollTrigger : {
        trigger : "#text-page-7 h1",
        scroller :"#main",
        scrub : 3,
        start : "top 95%",
        end : "top 40%",
    }
})

gsap.to("#page5-content img",{
    rotate : 360,
    duration : 5,
    repeat : -1,
    ease : "linear",
})

gsap.to("#line",{
    width: "100%",
    duration:1,
    ease : Expo.easeInOut,
    scrollTrigger: {
        trigger: "#line",
        scroller : "#main",
        scrub : 5,
        start : "top 80%",
        end : "top 60%",
    }
})

gsap.from("#page4 h1",{
    opacity:0,
    y: 50,
    duration:1,
    scrollTrigger: {
        trigger : "#page4",
        scroller : "#main",
        start: "top 60%",
        end: "top 40%",
    }
})
gsap.from("#page5-content h1",{
    opacity:0,
    y: 50,
    duration:1,
    scrollTrigger: {
        trigger : "#page5-content",
        scroller : "#main",
        start: "top 60%",
        end: "top 40%",
    }
})
gsap.from("#page5-content h4",{
    opacity:0,
    y: 50,
    duration:1,
    scrollTrigger: {
        trigger : "#page5-content",
        scroller : "#main",
        start: "top 60%",
        end: "top 40%",
    }
})
document.querySelector("#yes").addEventListener("mousemove", function(dets){
    document.querySelector("#yes img").style.opacity = 1;
    document.querySelector("#yes img").style.left = `${dets.x - 0}px`;
    document.querySelector("#yes img").style.top = `${dets.y -0}px`;
})

document.querySelector("#yes").addEventListener("mouseleave", function(dets){
    document.querySelector("#yes img").style.opacity = 0;
})

document.querySelector("#no").addEventListener("mousemove", function(dets){
    document.querySelector("#no img").style.opacity = 1;
    document.querySelector("#no img").style.left = `${dets.x - 0}px`;
    document.querySelector("#no img").style.top = `${dets.y -0}px`;
})

document.querySelector("#no").addEventListener("mouseleave", function(dets){
    document.querySelector("#no img").style.opacity = 0;
})

