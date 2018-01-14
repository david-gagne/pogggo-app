let menuBars = document.querySelector("body > div.header > div.header.header--right > button > span");
let menuButton = document.querySelector("body > div.header > div.header.header--right > button");
let menuModal = document.querySelector("body > div.menu");
let modalMenuButton = document.getElementById("modalMenuButton");
let body = document.querySelector("body");

menuBars.addEventListener("click", function() {
  menuModal.classList.remove("hide");
  menuModal.classList.toggle("show");
  modalMenuButton.classList.add("is-active");
  body.classList.toggle("restrictScroll");
});

modalMenuButton.addEventListener("click", function() {
  menuModal.classList.remove("show");
  menuModal.classList.toggle("hide");
  modalMenuButton.classList.remove("is-active");
  body.classList.toggle("restrictScroll");
});
