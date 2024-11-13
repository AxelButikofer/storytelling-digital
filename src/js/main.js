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
    "translate(" + deltaX1 + "px, " + deltaY1 + "px) scale(1.1)";

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
    "translate(" + deltaX3 + "px, " + deltaY3 + "px) scale(1.4)";

  // layer 4
  const deltaX4 =
    (-(containerCoords.width * 1.7 - containerCoords.width) * percX) / 2;
  const deltaY4 =
    (-(containerCoords.height * 1.7 - containerCoords.height) * percY) / 2;

  document.querySelector(".layer-4").style.transform =
    "translate(" + deltaX4 + "px, " + deltaY4 + "px) scale(1.7)";
});
