"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;

    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    animateButtons();
    updateNoButtonText();

    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});


function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

import confetti from "https://cdn.skypack.dev/canvas-confetti";

// function handleYesClick() {
//   titleElement.innerHTML = "Yayyy!! :3";
//   buttonsContainer.classList.add("hidden");
//   changeImage("yes");
//   launchConfetti();
// }

function launchConfetti() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 },
  });
}
noButton.addEventListener("mouseover", () => {
  if (noCount >= 3 && play) {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
    noButton.style.transition = "transform 0.3s ease";
  }
});
yesButton.addEventListener("mouseover", () => {
  noButton.style.transform = "none";
});
