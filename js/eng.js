function updateYearEng() {
  let currentYearEng =
    new Date().getFullYear() +
    " " +
    `© EuroAsia Logistics. <br> All rights reserved.`;
  document.getElementById("currentYearEng").innerHTML = currentYearEng;
}
window.onload = function () {
  updateYearEng();
};
setInterval(function () {
  if (
    new Date().getFullYear() !==
    parseInt(document.getElementById("currentYearEng").textContent)
  ) {
    updateYearEng();
  }
}, 1000 * 60 * 60 * 24);
