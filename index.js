const dropdownButton = document.querySelector('#dropdown-button');
const dropdownOverlay = document.querySelector('#dropdown-overlay');
const tweetModalButton = document.querySelector('#tweet-modal-button');
const tweetModalOverlay = document.querySelector('#tweet-modal-overlay');
const closeTweetModalButton = document.querySelector('#close-modal-button');
const displayThemeButton = document.querySelector('#display-button');
const trendButton = document.querySelector('#trend-button');
const closeTrendButton = document.querySelector('#close-trend-modal');
const root = document.querySelector('#root');
const dimThemeButton = document.querySelector('#dim-button');
const defaultThemeButton = document.querySelector('#default-button');
const darkThemeButton = document.querySelector('#light-out-button');

dropdownButton.addEventListener('click', () => {
  document.querySelector('.dropdown-content').style.display = 'block';
  dropdownOverlay.style.display = 'block';
})

dropdownOverlay.addEventListener('click', () => {
  document.querySelector('.dropdown-content').style.display = 'none';
  dropdownOverlay.style.display = 'none';
})

displayThemeButton.addEventListener('click', () => {
  document.querySelector('.theme-modal').style.display = 'block';
  document.querySelector('.dropdown-content').style.display = 'none';
  tweetModalOverlay.style.display = 'block';
  dropdownOverlay.style.display = 'none';
})

tweetModalButton.addEventListener('click', () => {
  document.querySelector('.tweet-modal-container').style.display = 'block';
  tweetModalOverlay.style.display = 'block';
})

tweetModalOverlay.addEventListener('click', () => {
  document.querySelector('.tweet-modal-container').style.display = 'none';
  document.querySelector('.trend-modal').style.display = 'none';
  tweetModalOverlay.style.display = 'none';
  document.querySelector('.theme-modal').style.display = 'none';
})

closeTweetModalButton.addEventListener('click', () => {
  document.querySelector('.tweet-modal-container').style.display = 'none';
  tweetModalOverlay.style.display = 'none';
})

trendButton.addEventListener('click', () => {
  document.querySelector('.trend-modal').style.display = 'block';
  tweetModalOverlay.style.display = 'block';
})

closeTrendButton.addEventListener('click', () => {
  document.querySelector('.trend-modal').style.display = 'none';
  tweetModalOverlay.style.display = 'none';
});

dimThemeButton.addEventListener('click', () => {
  root.className = 'dim-theme';
})

defaultThemeButton.addEventListener('click', () => {
  root.className = 'root';
})

darkThemeButton.addEventListener('click', () => {
  root.className = 'dark-theme';
})
