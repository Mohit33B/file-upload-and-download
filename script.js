var initialPath = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});

var tl = gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
});

gsap.to("#page2 h1", {
  transform: "translateX(-190%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
gsap.from("#page3 h1", {
  opacity: 0,
  duration: 1,
  x: 1000,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    scrub: 2,
  },
});
gsap.from("#page3 h2", {
  opacity: 0,
  duration: 1,
  x: -1000,
  scrollTrigger: {
    trigger: "#page3 h2",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    scrub: 2, //start se end
  },
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

gsap.from("#page4 #box", {
  scale: 0,
  duration: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scrollTrigger: {
    trigger: "#page4 #box",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
  },
});
