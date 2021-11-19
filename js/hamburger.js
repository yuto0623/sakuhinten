function hamburger() {
  document.getElementById("hamburger").classList.toggle("clicked");
  document.getElementById("tojiicon").classList.toggle("clicked");
  document.getElementById("menu").classList.toggle("clicked");
}

document.getElementById("hamburger").addEventListener("click", function () {
  hamburger();
});
