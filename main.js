import nextElement from "./utils/nextElement.js";
import previousElement from "./utils/previousElement.js";

const songs = document.querySelectorAll('.song-slider');
const nextButton = document.getElementById('next-button');
const backButton =  document.getElementById('back-button');

nextButton.addEventListener('click', () => {
  nextElement(songs);
})

backButton.addEventListener('click', () => {
  previousElement(songs);
})