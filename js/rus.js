function updateYearRus() {
  let currentYearRus =
    new Date().getFullYear() +
    " " +
    `© EuroAsia Logistics. <br> Все права защищены.`;
  document.getElementById("currentYearRus").innerHTML = currentYearRus;
}
window.onload = function () {
  updateYearRus();
};
setInterval(function () {
  if (
    new Date().getFullYear() !==
    parseInt(document.getElementById("currentYearRus").textContent)
  ) {
    updateYearRus();
  }
}, 1000 * 60 * 60 * 24);
