const smallScreenEventListeners = () => {
  const tweetModalOverlay = document.querySelector('#tweet-modal-overlay');
  const displayThemeButton = document.querySelector('#displayButton');
  const profileButton = document.querySelector('#editProfile');
  const smallScreenTrends = document.querySelector('#smallscreen-trend');
  const smallScreenModal = document.querySelector('#smallscreen-modal');
  const smallScreenPhoto = document.querySelector('.small-screen-photo');
  const tweetModalIcon = document.querySelector('#tweet-modal-icon');
  const smallScreenHome = document.querySelector('#smallscreen-home');

  function changeDisplay(element, selector, value, overlay) {
    element.addEventListener('click', () => {
      document.querySelector(selector).style.display = value;
      overlay.style.display = value;
    })
  }

  // changeDisplay(tweetModalIcon, '.tweet-modal-container', 'block', tweetModalOverlay)
  changeDisplay(smallScreenModal, '.tweet-modal-container', 'block', tweetModalOverlay);
  changeDisplay(smallScreenPhoto, '.smallscreen-left-nav', 'block', tweetModalOverlay);
  changeDisplay(tweetModalOverlay, '.smallscreen-left-nav', 'none', tweetModalOverlay);


  smallScreenTrends.addEventListener('click', () => {
    document.querySelector('.trending-pane').style.display = 'block';
    document.querySelector('#tweet-output').style.display = 'none';
  })

  smallScreenHome.addEventListener('click', () => {
    document.querySelector('.trending-pane').style.display = 'none';
    document.querySelector('#tweet-output').style.display = 'block';
  })

  profileButton.addEventListener('click', () => {
    document.querySelector('.edit-profile-modal').style.display = 'block';
    document.querySelector('.smallscreen-left-nav').style.display = 'none';
  })

  displayThemeButton.addEventListener('click', () => {
    document.querySelector('.theme-modal').style.display = 'block';
    document.querySelector('.smallscreen-left-nav').style.display = 'none';
  })
}

export default smallScreenEventListeners