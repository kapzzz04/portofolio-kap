const nama = 'Keyla';
const umur = 16;

const menu = document.querySelector(".menu-toggle");
const baru = document.querySelector(".navbar ul");

menu.addEventListener("click", function () {
  baru.classList.toggle("slide");
});
