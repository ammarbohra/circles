$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $(".navbar").removeClass("transparent py-md-5");
  }
  else if (scroll < 10) {
    $(".navbar").addClass("transparent py-md-5");
}
});

let circle = document.querySelector('.circle');
let elem = document.querySelector('#elem');
let circ1 = document.querySelector('#circ1');
let circ2 = document.querySelector('#circ2');
let circ3 = document.querySelector('#circ3');
let circ4 = document.querySelector('#circ4');
let circ5 = document.querySelector('#circ5');

var viewPortWidth = screen.width;
console.log(screen.width)
if(viewPortWidth >= 1020) {
let t2 = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "-5% top", // when the top of the trigger hits the top of the viewport
// end:"top 10px",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
}
});
t2.to('.circle', {
position:"fixed",
// backgroundColor:"blue",
width:"300px",
height:"300px"
},0)
let tl = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "#hero2", // when the top of the trigger hits the top of the viewport,
// end:"bottom bottom",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
}
});
tl.to('#circ1', {
left:'14%'
},0)
.to('#circ2', {
left:'32%'
}, 0)
.to('#circ3', {
left:'50%'
}, 0)
.to('#circ4', {
left:'68%'
}, 0)
.to('#circ5', {
left:'84%'
}, 0)
.to('.circle span',{
opacity:1
},0)
}
else if(viewPortWidth < 450){
let t2 = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "-5% top", // when the top of the trigger hits the top of the viewport
// end:"top 10px",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});
t2.to('.circle', {
position:"fixed",
// backgroundColor:"blue",
width:"80px",
height:"80px"
},0)
let tl = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "#hero2", // when the top of the trigger hits the top of the viewport,
// end:"bottom bottom",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});
tl.to('#circ1', {
left:'14%'
},0)
.to('#circ2', {
left:'32%'
}, 0)
.to('#circ3', {
left:'50%'
}, 0)
.to('#circ4', {
left:'68%'
}, 0)
.to('#circ5', {
left:'84%'
}, 0)
.to('.circle span',{
opacity:1,
scale:.41,
bottom:'-30%'
},0)
}
else if(viewPortWidth < 650 & viewPortWidth > 450){
let t2 = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "-5% top", // when the top of the trigger hits the top of the viewport
// end:"top 10px",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});
t2.to('.circle', {
position:"fixed",
// backgroundColor:"blue",
width:"110px",
height:"110px"
},0)
let tl = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "#hero2", // when the top of the trigger hits the top of the viewport,
// end:"bottom bottom",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});
tl.to('#circ1', {
left:'14%'
},0)
.to('#circ2', {
left:'32%'
}, 0)
.to('#circ3', {
left:'50%'
}, 0)
.to('#circ4', {
left:'68%'
}, 0)
.to('#circ5', {
left:'84%'
}, 0)
.to('.circle span',{
opacity:1,
scale:.41,
bottom:'-30%'
},0)
}
else if(viewPortWidth > 650 & viewPortWidth < 720){
let t2 = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "-5% top", // when the top of the trigger hits the top of the viewport
// end:"top 10px",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});

t2.to('.circle', {
position:"fixed",
// backgroundColor:"blue",
width:"120px",
height:"120px"
},0)

let tl = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "#hero2", // when the top of the trigger hits the top of the viewport,
// end:"bottom bottom",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});
tl.to('#circ1', {
left:'22%'
},0)
.to('#circ2', {
left:'36%'
}, 0)
.to('#circ3', {
left:'50%'
}, 0)
.to('#circ4', {
left:'64%'
}, 0)
.to('#circ5', {
left:'78%'
}, 0)
.to('.circle span',{
opacity:1,
scale:.41,
bottom:'-30%'
},0)

}

else if(viewPortWidth > 720 & viewPortWidth < 800){
let t2 = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "-5% top", // when the top of the trigger hits the top of the viewport
// end:"top 10px",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});
t2.to('.circle', {
position:"fixed",
// backgroundColor:"blue",
width:"150px",
height:"150px"
},0)
let tl = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "#hero2", // when the top of the trigger hits the top of the viewport,
// end:"bottom bottom",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});
tl.to('#circ1', {
left:'16%'
},0)
.to('#circ2', {
left:'33%'
}, 0)
.to('#circ3', {
left:'50%'
}, 0)
.to('#circ4', {
left:'67%'
}, 0)
.to('#circ5', {
left:'84%'
}, 0)
.to('.circle span',{
opacity:1,
scale:.41,
bottom:'-30%'
},0)
}
else if(viewPortWidth > 800 & viewPortWidth < 1020){
let t2 = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "-5% top", // when the top of the trigger hits the top of the viewport
// end:"top 10px",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});
t2.to('.circle', {
position:"fixed",
// backgroundColor:"blue",
width:"180px",
height:"180px"
},0)
let tl = gsap.timeline({
scrollTrigger: {
trigger: "#elem",
pin: "#elem",   // pin the trigger element while active
start: "#hero2", // when the top of the trigger hits the top of the viewport,
// end:"bottom bottom",
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
toggleActions: "play pause resume reset"
// once:true
}
});
tl.to('#circ1', {
left:'16%'
},0)
.to('#circ2', {
left:'33%'
}, 0)
.to('#circ3', {
left:'50%'
}, 0)
.to('#circ4', {
left:'67%'
}, 0)
.to('#circ5', {
left:'84%'
}, 0)
.to('.circle span',{
opacity:1,
scale:.41,
bottom:'-30%'
},0)
}