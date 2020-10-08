const slider = document.querySelector(".slider");
const navbar = document.querySelector(".navbar");
const tl = new TimelineMax();

tl.fromTo(
slider,1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}
)
.fromTo(navbar,1.2,{y:"-100%"}, {y:"0%",ease: Power2.easeInOut}, "-=1.2"
);