window.onload = function () {
  const playVideo = document.getElementById("playVideo");
  const popupWrap = document.getElementById("popupWrap");
  const closeBtn = document.getElementById("closeBtn");

  playVideo.addEventListener("click", function () {
    popupWrap.classList.toggle("show");
  });

  closeBtn.addEventListener("click", function () {
    popupWrap.classList.remove("show");
  });
};
