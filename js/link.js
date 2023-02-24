const headerHeight = document.querySelector(".header__navbar").offsetHeight; // получаем высоту хедера
const links = document.querySelectorAll('a[href^="#"]'); // выбираем все якорные ссылки

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // отменяем стандартное поведение ссылки

    const target = document.querySelector(link.getAttribute("href")); // получаем целевой элемент
    const targetPosition = target.offsetTop; // получаем позицию целевого элемента относительно верхнего края страницы
    const scrollPosition = targetPosition - headerHeight; // вычитаем высоту хедера

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth", // добавляем плавную прокрутку
    });
  });
});
