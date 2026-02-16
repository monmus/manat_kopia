/* open/close menu quando clicar no icone */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
console.log(toggle);
for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/* esconder o menu quando clicar em um item dele */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

/* adicionar sombra ao header quando scrollar */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // scroll é menor que a altura do header
    header.classList.remove("scroll");
  }
}

/* Testimonials Carousel Slider - SWIPER */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* ScrollReveal: Mostrando os elementos ao dar scroll na página */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
	#about .image, #about .text,
  #how .image, #how .text,
  #mindfulness .text, #mindfulness .image,
  #training .image, #training .text,
	#contact .text, #contact .links,
	footer .brand, footer .social
	`,
  { interval: 100 }
);

/* Back to Top Button */
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

/* When Scroll */
window.addEventListener("scroll", () => {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

document.addEventListener("DOMContentLoaded", function () {
  const contentContainers = document.querySelectorAll(".content");

  contentContainers.forEach((content, index) => {
    const showMoreButton = document.createElement("div");
    showMoreButton.classList.add("show-more");
    showMoreButton.innerHTML = "Zobacz więcej &#9660"; // Use &#9650; for chevron-up
    content.parentNode.insertBefore(showMoreButton, content.nextSibling);

    showMoreButton.addEventListener("click", function () {
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        showMoreButton.innerHTML = "Zobacz więcej &#9660"; // Use &#9650; for chevron-up
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        showMoreButton.innerHTML = "Zobacz mniej &#9650"; // Use &#9660; for chevron-down
      }
    });
  });
});
