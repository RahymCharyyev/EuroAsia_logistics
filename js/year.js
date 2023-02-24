function updateYear() {
  var currentYear =
    new Date().getFullYear() +
    " " +
    `© EuroAsia Logistics. <br> Все права защищены.`;
  document.getElementById("currentYear").innerHTML = currentYear;
}
window.onload = function () {
  updateYear();
};
setInterval(function () {
  if (
    new Date().getFullYear() !==
    parseInt(document.getElementById("currentYear").textContent)
  ) {
    updateYear();
  }
}, 1000 * 60 * 60 * 24);
