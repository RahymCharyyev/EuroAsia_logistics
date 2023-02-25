const modalWrapper = document.querySelector(".modal-wrapper");
const closeBtns = document.querySelectorAll(".close-btn");
const modals = document.querySelectorAll(".modal");

if (window.innerWidth < 850) {
  const modalLinks = document.querySelectorAll("[id^='link']");

  modalLinks.forEach((link, index) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      modals[index].style.display = "block";
      modalWrapper.style.display = "block";
    });
  });

  closeBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      modals[index].style.display = "none";
      modalWrapper.style.display = "none";
    });
  });

  modalWrapper.addEventListener("click", function (e) {
    if (e.target === modalWrapper) {
      modals.forEach((modal) => {
        modal.style.display = "none";
      });
      modalWrapper.style.display = "none";
    }
  });
}
