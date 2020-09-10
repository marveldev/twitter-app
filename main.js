import modal from './Modules/Modal.js';
import leftSideNav from './Modules/LeftNav.js';
import mainContent from './Modules/MainContent.js';
import rightSideNav from './Modules/RightSideNav.js';

const mainApp = () => {
  return `
    ${modal()}
    ${leftSideNav()}
    <section class="grid-container">
      ${mainContent()}
      ${rightSideNav()}
    </section>
  `
}
document.getElementById('root').innerHTML = mainApp();

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
const tweetModalIcon = document.querySelector('#tweet-modal-icon');

function changeDisplay(element, selector, value, overlay) {
  element.addEventListener('click', () => {
    document.querySelector(selector).style.display = value;
    overlay.style.display = value;
  })
}

changeDisplay(dropdownButton, '.dropdown-content', 'block', dropdownOverlay);
changeDisplay(dropdownOverlay, '.dropdown-content', 'none', dropdownOverlay);
changeDisplay(tweetModalButton, '.tweet-modal-container', 'block', tweetModalOverlay)
changeDisplay(tweetModalIcon, '.tweet-modal-container', 'block', tweetModalOverlay)
changeDisplay(closeTweetModalButton, '.tweet-modal-container', 'none', tweetModalOverlay);
changeDisplay(trendButton, '.trend-modal', 'block', tweetModalOverlay);
changeDisplay(closeTrendButton, '.trend-modal', 'none', tweetModalOverlay);

displayThemeButton.addEventListener('click', () => {
  document.querySelector('.theme-modal').style.display = 'block';
  document.querySelector('.dropdown-content').style.display = 'none';
  tweetModalOverlay.style.display = 'block';
  dropdownOverlay.style.display = 'none';
})

tweetModalOverlay.addEventListener('click', () => {
  document.querySelector('.tweet-modal-container').style.display = 'none';
  document.querySelector('.trend-modal').style.display = 'none';
  tweetModalOverlay.style.display = 'none';
  document.querySelector('.theme-modal').style.display = 'none';
})

dimThemeButton.addEventListener('click', () => {
  root.className = 'dim-theme';
  document.querySelector('body').style.backgroundColor = '#15202B';
})

defaultThemeButton.addEventListener('click', () => {
  root.className = 'root';
  document.querySelector('body').style.backgroundColor = '#fff';
})

darkThemeButton.addEventListener('click', () => {
  root.className = 'dark-theme';
  document.querySelector('body').style.backgroundColor = '#000';
})
