const burger = document.querySelector(".navbar__mobile-toggler");
const mobileNav = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close-nav");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("on");
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("on");
});
