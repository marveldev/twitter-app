const smallScreenEventListeners = () => {
  const tweetModalOverlay = document.querySelector('#tweet-modal-overlay');
  const displayThemeButton = document.querySelector('#display-button');
  const dropdownOverlay = document.querySelector('#dropdown-overlay');
  const smallScreenTrends = document.querySelector('#smallscreen-trend');
  const smallScreenModal = document.querySelector('#smallscreen-modal');
  const smallScreenTheme = document.querySelector('.small-screen-photo');
  const tweetModalIcon = document.querySelector('#tweet-modal-icon');
  const smallScreenHome = document.querySelector('#smallscreen-home');

  function changeDisplay(element, selector, value, overlay) {
    element.addEventListener('click', () => {
      document.querySelector(selector).style.display = value;
      overlay.style.display = value;
    })
  }

  changeDisplay(tweetModalIcon, '.tweet-modal-container', 'block', tweetModalOverlay)
  changeDisplay(smallScreenModal, '.tweet-modal-container', 'block', tweetModalOverlay);
  changeDisplay(smallScreenTheme, '.dropdown-content', 'block', dropdownOverlay);

  smallScreenTrends.addEventListener('click', () => {
    document.querySelector('.right-side-nav').style.display = 'block';
    document.querySelector('#tweet-data').style.display = 'none';
  })

  smallScreenHome.addEventListener('click', () => {
    document.querySelector('.right-side-nav').style.display = 'none';
    document.querySelector('#tweet-data').style.display = 'block';
  })
}

export default smallScreenEventListeners