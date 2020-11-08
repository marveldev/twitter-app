const navModalEventListeners = () => {
  const dropdownButton = document.querySelector('#dropdown-button');
  const tweetModalButton = document.querySelector('#tweet-modal-button');
  const closeTweetModalButton = document.querySelector('#close-modal-button');
  const trendButton = document.querySelector('#trend-button');
  const closeTrendButton = document.querySelector('#close-trend-modal');
  const dropdownOverlay = document.querySelector('#dropdown-overlay');
  const tweetModalOverlay = document.querySelector('#tweet-modal-overlay');
  const displayThemeButton = document.querySelector('#display-button');
  const profileButton = document.querySelector('#profileButton')
  const profileModalButton = document.querySelector('#profileModalButton')
  
  function changeDisplay(element, selector, value, overlay) {
    element.addEventListener('click', () => {
      document.querySelector(selector).style.display = value;
      overlay.style.display = value;
    })
  }
  
  changeDisplay(dropdownButton, '.dropdown-content', 'block', dropdownOverlay); //opens display drpdown
  changeDisplay(dropdownOverlay, '.dropdown-content', 'none', dropdownOverlay); 
  changeDisplay(tweetModalButton, '.tweet-modal-container', 'block', tweetModalOverlay)  //opens tweet modal
  changeDisplay(closeTweetModalButton, '.tweet-modal-container', 'none', tweetModalOverlay); //closes
  changeDisplay(trendButton, '.trend-modal', 'block', tweetModalOverlay); //opens right side trend modal
  changeDisplay(closeTrendButton, '.trend-modal', 'none', tweetModalOverlay); //closes
  changeDisplay(profileModalButton,'.edit-profile-modal', 'none', tweetModalOverlay) //closes

  displayThemeButton.addEventListener('click', () => { //opens theme modal
    document.querySelector('.theme-modal').style.display = 'block';
    document.querySelector('.dropdown-content').style.display = 'none';
    tweetModalOverlay.style.display = 'block';
    dropdownOverlay.style.display = 'none';
  })

  profileButton.addEventListener('click', () => { 
    document.querySelector('.edit-profile-modal').style.display = 'block';
    document.querySelector('.dropdown-content').style.display = 'none';
    dropdownOverlay.style.display = 'none'
    tweetModalOverlay.style.display = 'block';
  })

  tweetModalOverlay.addEventListener('click', () => { //closes all modals
    document.querySelector('.tweet-modal-container').style.display = 'none';
    document.querySelector('.trend-modal').style.display = 'none';
    document.querySelector('.theme-modal').style.display = 'none';
    document.querySelector('.edit-profile-modal').style.display = 'none';
    const deleteModals = document.querySelectorAll('.delete-modal')
    for (let index = 0; index < deleteModals.length; index++) {
      const deleteModal = deleteModals[index];
      deleteModal.style.display = 'none';
    }
    tweetModalOverlay.style.display = 'none';
  })

  const messageButton = document.querySelector('.message-btn');
  messageButton.addEventListener('click', () => {
    const message = document.querySelector('#message');
    message.style.display = 'none';
  })
}

export default navModalEventListeners
