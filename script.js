// Set the date we're counting down to
var countDownDate = new Date("Jan 27, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

let slideIndex = 0;
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".mySlides");
const totalSlides = slides.length;

function showNextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  const offset = -slideIndex * 100;
  sliderTrack.style.transform = `translateX(${offset}%)`;
}
setInterval(showNextSlide, 3000);

function checkDeviceSize() {
  const element = document.querySelector(".text");
  const viewportWidth = window.innerWidth;
  if (viewportWidth >= 280 && viewportWidth <= 319) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
}
window.addEventListener("resize", checkDeviceSize);
window.addEventListener("load", checkDeviceSize);

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll("[data-aos]").forEach((elem) => {
  gsap.from(elem, {
    opacity: 1,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});

let menu = gsap.timeline({
  scrollTrigger: {
    trigger: ".nav",
    start: "top -1%",
    end: "bottom 0%",
    scrub: 1,
  },
});
menu.to(".nav", { background: "black" });

let paraTexts = new SplitType("#tex", { type: "chars" });
gsap.from(paraTexts.chars, {
  color: "#32E875",
  stagger: 0.08,
  scrollTrigger: {
    trigger: "#text-h",
    start: "top 90%",
    end: "45% 58%",
    scrub: 1,
  },
});

gsap.from(".char", {
  y: 20,
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: "#buung",
    start: "0% center",
    end: "10% center",
    scrub: 1,
  },
});
