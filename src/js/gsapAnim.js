function gsapAni() {
  gsap.registerPlugin(ScrollTrigger);

  // sec_01物件動畫
  gsap.to(".para-sec01-Left", {
    scrollTrigger: {
      trigger: "#sec_01",
      scrub: .3
    },
    y: (i, target) => -window.innerHeight * target.dataset.speed,
    rotation: 60,
    ease: "bounce.in"
  });

  gsap.to(".para-sec01-Right", {
    scrollTrigger: {
      trigger: "#sec_01",
      scrub: .5
    },
    y: (i, target) => -window.innerHeight * target.dataset.speed,
    // rotation: 130,
    ease: "bounce.out"
  });
  // blueGradient物件動畫
  gsap.to(".para-box-Left", {
    scrollTrigger: {
      trigger: "#sec_01",
      scrub: .9
    },
    y: (i, target) => -window.innerHeight * target.dataset.speed,
    rotation: 120,
    ease: "bounce.in"
  });

  gsap.to(".para-box-Right", {
    scrollTrigger: {
      trigger: "#sec_01",
      scrub: .5
    },
    y: (i, target) => -window.innerHeight * target.dataset.speed,
    rotation: 20,
    ease: "bounce.out"
  });
}
