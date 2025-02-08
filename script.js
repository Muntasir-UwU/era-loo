// Set the date we're counting down to
var countDownDate = new Date("Jan 27, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
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

// Start automatic slideshow
setInterval(showNextSlide, 3000);

function checkDeviceSize() {
  const element = document.querySelector(".text"); // Change to your element selector

  // Get the viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Check if width is 320px and height is 550px
  if (viewportWidth >= 280 && viewportWidth <= 319) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
}

// Run on page load and window resize
window.addEventListener("resize", checkDeviceSize);
window.addEventListener("load", checkDeviceSize);

gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1.4, // Effect Multiplier
  reloadOnContextChange: true,
  touchMultiplier: 2,
  smoothMobile: 1,
  smartphone: {
    smooth: 1,
    breakpoint: 767,
  },
  tablet: {
    smooth: 1,
    breakpoint: 1024,
  },
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

let menu = gsap.timeline({
  scrollTrigger: {
    trigger: ".nav",
    scroller: "#main-shit",
    start: "top -1%",
    end: "bottom 0%",
    scrub: 1,
  },
});
menu.to(".nav", {
  background: "black",
});

let paraTexts = new SplitType("#tex", { type: "chars" });

let tolo = gsap.timeline({
  scrollTrigger: {
    trigger: "#text-h",
    start: "top 90%",
    end: "45% 58%",
    scroller: "#main-shit",
    scrub: 1,
  },
});
tolo.to(paraTexts.chars, {
  color: "#32E875",
  stagger: 0.08,
});
const myText2 = new SplitType("#h1");

let text = gsap.timeline({
  scrollTrigger: {
    trigger: "#buung",
    start: "0% center",
    end: "10% center",
    scroller: "#main-shit",

    scrub: 1,
  },
});
text.to(".char", {
  y: 0,
  stagger: 0.05,
});

let box = gsap.timeline({
  scrollTrigger: {
    trigger: ".g-shit",
    scroller: "#main-shit",

    start: "top 90%",
    end: "100% 90%",
    scrub: 1,
  },
});

box.to("#time", {
  width: "100%",
  borderRadius: "0px",
});

let box1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".g-shit",
    scroller: "#main-shit",

    start: "170% 5%",
    end: "250% 5%",
    scrub: 1,
  },
});

box1.to("#time", {
  width: "92%",
  borderRadius: "20px",
});

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate");
    } else {
      entry.target.classList.remove("aos-animate");
    }
  });
});
document.querySelectorAll("[data-aos]").forEach((aosElem) => {
  observer.observe(aosElem);
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".g-shit",
    scrub: 0.5,
    scroller: "#main-shit",
    pin: ".g-shit",
    start: "top 0%",
    end: "162% center",
  },
});

const split = new SplitType("#gtext", { types: "words" });

const tlo = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#gtext",
      start: "top 10%",
      end: "bottom 10%",
      scrub: 0.5,
      scroller: "#main-shit",
    },
  })
  .set(
    split.words,
    {
      duration: 0.3,
      color: "#EEF0F2",
      stagger: 0.1,
    },
    0.1
  );

tlo.to(allMasks, {
  width: "0%",
  duration: 1,
  stagger: 0.5,
});
