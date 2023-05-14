//HEADER DOTS
const navigationDot = document.querySelectorAll(".navigation__dot");

navigationDot.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.closest(".navigation__dot");
    const bg = target.getAttribute("data-bg");
    document.body.setAttribute("data-bg", bg);
  });
});

const navigationDots = document.querySelectorAll(".navigation__dot");
const title = document.getElementById("p1");
const text = document.getElementById("p2");

navigationDots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    e.preventDefault();
    const dotTitle = dot.dataset.title;
    const dotText = dot.dataset.text;
    title.textContent = dotTitle;
    text.textContent = dotText;
  });
});

//OWL CAROUSEL
$(".owl-carousel").owlCarousel({
  loop: true,
  cssEase: true,
  nav: false,
  items: 3,
  
  dots: false,
  margin: 20,
});

$(".button__prev").click(function () {
  $(".owl-carousel").trigger("prev.owl.carousel");
});

$(".button__next").click(function () {
  $(".owl-carousel").trigger("next.owl.carousel");
});

//DOTS UNDER THE OWL CAROUSEL
$(document).ready(function () {
  let owl = $(".owl-carousel");
  owl.owlCarousel({});

  let dots = document.querySelectorAll(".owl-dot");
let dotCount = dots.length;

owl.on("changed.owl.carousel", function (event) {
  let activeDotIndex = event.item.index - dotCount;
  if (activeDotIndex < 0) {
    activeDotIndex = dotCount + activeDotIndex;
  }
  for (let i = 0; i < dotCount; i++) {
    if (i == activeDotIndex) {
      dots[i].classList.add("active");
    } else {
      dots[i].classList.remove("active");
    }
  }
});

$(".owl-dot").click(function () {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  let item = $(this).data("owl-item");
  owl.trigger("to.owl.carousel", [item, 300, true]);

  $(this).addClass("active");

  return false;
});
});

const dots = document.querySelectorAll(".owl-dot");
const prevButton = document.querySelector(".button__prev");
const nextButton = document.querySelector(".button__next");

let activeDotIndex = 0;

prevButton.addEventListener("click", () => {
  if (activeDotIndex > 0) {
    activeDotIndex--;
  } else {
    activeDotIndex = dots.length - 1;
  }
  dots[activeDotIndex].click();
});

nextButton.addEventListener("click", () => {
  if (activeDotIndex < dots.length - 1) {
    activeDotIndex++;
  } else {
    activeDotIndex = 0;
  }
  dots[activeDotIndex].click();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dot.click();
    activeDotIndex = index;
  });
});

// POP UP GALLERY IMGS
const gallery = document.querySelector(".gallery");
const modal = document.createElement("div");
modal.classList.add("modal");
gallery.appendChild(modal);

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);

const images = document.querySelectorAll(".gallery__img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalContent.innerHTML = "";
    const clonedImage = image.cloneNode(true);
    clonedImage.classList.add("modal-img");
    modalContent.appendChild(clonedImage);
    modal.style.display = "block";
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// SMOOTH SCROLLING WHEN CLICKING ON ANCHOR LINKS
$('a[href*="#"]:not([href="#"])').click(function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
      return false;
    }
  }
});

  //    // Smooth scroll on mouse wheel scroll
  // const sections = document.querySelectorAll('.scroll-section');
  // const smoothScroll = (event) => {
  //   event.preventDefault();
  //   const delta = event.deltaY || event.detail || event.wheelDelta;
  //   const targetIndex = Math.floor(window.scrollY / window.innerHeight) + (delta > 0 ? 1 : -1);
  //   const targetSection = sections[targetIndex];
  //   if (targetSection) {
  //     targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     setTimeout(() => window.scrollBy(0, delta / 10), 100);
  //   }
  // };
  // document.addEventListener('wheel', smoothScroll);