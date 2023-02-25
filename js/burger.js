const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");
const closeBurger = document.querySelector(".close-burger");
const linksBurger = document.querySelectorAll(".menu-links a");

burgerBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBurger.addEventListener("click", () => {
  menu.classList.remove("active");
});

linksBurger.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
