const img = document.querySelector(".under-maintenance-popup");
const webContent = document.querySelector(".website-content");
const popupBtn = document.querySelector(".under-maintenance-popup-btn");


function closeWindow() {
  img.classList.replace("show", "hide");
  webContent.classList.replace("hide", "show");
  }