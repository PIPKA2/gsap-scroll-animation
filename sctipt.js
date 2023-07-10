gsap.to(".text", {
  fontSize: `clamp(min(150px), 500px, max(500px)`,
  scrollTrigger: {
    trigger: ".card",
    pin: true,
    pinSpacing: false,
    start: "top",
    end: "top",
    scrub: 5,
    markers: true,
  },
  transform: "translate3d(0px, 100px, 0px)",
});
