import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// HEADER PARALLAX

const parallaxContainer = document.querySelector(".parallax-container");

parallaxContainer.addEventListener("mousemove", function (event) {
  const containerCoords = parallaxContainer.getBoundingClientRect();

  const clX = event.clientX - containerCoords.left;
  const clY = event.clientY - containerCoords.top;

  const percX = (clX / containerCoords.width) * 2 - 1;
  const percY = (clY / containerCoords.height) * 2 - 1;

  // layer 1
  const deltaX1 =
    (-(containerCoords.width * 1.1 - containerCoords.width) * percX) / 2;
  const deltaY1 =
    (-(containerCoords.height * 1.1 - containerCoords.height) * percY) / 2;

  document.querySelector(".layer-1").style.transform =
    "translate(" + deltaX1 + "px, " + deltaY1 + "px) scale(1)";

  // layer 2
  const deltaX2 =
    (-(containerCoords.width * 1.2 - containerCoords.width) * percX) / 2;
  const deltaY2 =
    (-(containerCoords.height * 1.2 - containerCoords.height) * percY) / 2;

  document.querySelector(".layer-2").style.transform =
    "translate(" + deltaX2 + "px, " + deltaY2 + "px) scale(1.2)";

  // layer 3
  const deltaX3 =
    (-(containerCoords.width * 1.4 - containerCoords.width) * percX) / 2;
  const deltaY3 =
    (-(containerCoords.height * 1.4 - containerCoords.height) * percY) / 2;

  document.querySelector(".layer-3").style.transform =
    "translate(" + deltaX3 + "px, " + deltaY3 + "px) scale(1.5)";

  // layer 4
  const deltaX4 =
    (-(containerCoords.width * 1.7 - containerCoords.width) * percX) / 2;
  const deltaY4 =
    (-(containerCoords.height * 1.7 - containerCoords.height) * percY) / 2;

  document.querySelector(".layer-4").style.transform =
    "translate(" + deltaX4 + "px, " + deltaY4 + "px) scale(1.5)";
});

// WORLDMAP SCROLLTRIGGER
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".worldmap-viewport",
    start: "top top",
    end: "+=15000",
    markers: true,
    scrub: 1,
    pin: true,
  },
});

tl.to(".worldmap", {
  scale: 2.5,
  x: "50%",
  y: "10%",
  duration: 4,
  ease: "power1.inOut",
});

tl.to(".card-1", {
  opacity: 1,
  duration: 3,
  ease: "power1.inOut",
});

tl.to(".card-1", {
  opacity: 0,
  duration: 3,
  ease: "power1.inOut",
});

tl.to(".worldmap", {
  scale: 2.5,
  x: "-30%",
  y: "50%",
  duration: 4,
  ease: "power1.inOut",
});

tl.to(".card-2", {
  opacity: 1,
  duration: 3,
  ease: "power1.inOut",
});

tl.to(".card-2", {
  opacity: 0,
  duration: 3,
  ease: "power1.inOut",
});

tl.to(".worldmap", {
  x: "-30%",
  y: "50%",
  duration: 2,
  ease: "power1.inOut",
});

tl.to(".worldmap", {
  x: "-90%",
  y: "-70%",
  duration: 2,
  ease: "power1.inOut",
});

tl.to(".card-3", {
  opacity: 1,
  duration: 3,
  ease: "power1.inOut",
});

tl.to(".card-3", {
  opacity: 0,
  duration: 3,
  ease: "power1.inOut",
});

tl.to(".worldmap", {
  scale: 1,
  x: "0",
  y: "0",
  duration: 4,
  ease: "power1.inOut",
});

// STORYTELLING SCROLLTRIGGER

gsap.to(".frame-1", {
  scrollTrigger: {
    trigger: ".frame-1",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-2", {
  scrollTrigger: {
    trigger: ".frame-2",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-3", {
  scrollTrigger: {
    trigger: ".frame-3",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-4", {
  scrollTrigger: {
    trigger: ".frame-4",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-5", {
  scrollTrigger: {
    trigger: ".frame-5",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-6", {
  scrollTrigger: {
    trigger: ".frame-6",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-7", {
  scrollTrigger: {
    trigger: ".frame-7",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-8", {
  scrollTrigger: {
    trigger: ".frame-8",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-9", {
  scrollTrigger: {
    trigger: ".frame-9",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-10", {
  scrollTrigger: {
    trigger: ".frame-10",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});

gsap.to(".frame-11", {
  scrollTrigger: {
    trigger: ".frame-11",
    start: "top 40%",
    end: "+=200",
    scrub: true,
    markers: true,
  },
  opacity: 1,
  duration: 2,
});
