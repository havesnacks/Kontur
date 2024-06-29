const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;

const rotateAmount = 90;
const rotationInterval = 3000;

prevEl.addEventListener("click", () => {
  changeRotation(rotateAmount);
});

nextEl.addEventListener("click", () => {
  changeRotation(-rotateAmount);
});

function changeRotation(amount) {
  x += amount;
  clearTimeout(timer);
  updateGallery();
}

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    changeRotation(-rotateAmount);
  }, rotationInterval);
}

updateGallery();
