const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");
const linksBurger = document.querySelectorAll(".menu-links a");

burgerBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

linksBurger.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
