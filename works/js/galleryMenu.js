function galleryMenu() {
  document.getElementById("galleryMenuButton").classList.toggle("clicked");
  document.getElementById("galleryMenu").classList.toggle("clicked");
}

document
  .getElementById("galleryMenuButton")
  .addEventListener("click", function () {
    galleryMenu();
  });
