const xButton = document.getElementById("xButton")
const videoPopup = document.getElementById("videoPopup")
const video = document.getElementById("video")

xButton.addEventListener("click", function () {
  videoPopup.style.display = "block"
  video.play()
})

video.addEventListener("ended", function () {
  videoPopup.style.display = "none"
})

videoPopup.addEventListener("click", function (e) {
  if (e.target === videoPopup) {
    videoPopup.style.display = "none"
  }
})
