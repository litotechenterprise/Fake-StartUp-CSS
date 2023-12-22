let backdrop = document.querySelector(".backdrop");
let mobileNavBtn = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

mobileNavBtn.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});

backdrop.addEventListener("click", () => {
  mobileNav.style.display = "none";
  backdrop.style.display = "none";
});
