import { addEntryToDb, getEntryFromDb, deleteEntry } from '../../dataStorage.js';

const addTweetItemToDb = () => {
  const tweetContainer = document.querySelector('.tweet-modal-container')
  const tweetModalOverlay = document.querySelector('#tweet-modal-overlay');
  const tweetButtons = document.querySelectorAll('.add-tweet-button')
  const tweetOutput = document.querySelector('#tweet-output')
  const inputs = document.querySelectorAll('.input');

  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    input.addEventListener('keyup', () => {
      if (input.value.trim().length >= 1) {
        const element = input.id
        const tweetButton = document.querySelector(`[title=${element}]`);
        tweetButton.removeAttribute('disabled')
      } else {
        const element = input.id
        const tweetButton = document.querySelector(`[title=${element}]`);
        tweetButton.setAttribute('disabled', '')
      }
    })
  }

  for (let index = 0; index < tweetButtons.length; index++) {
    const tweetButton = tweetButtons[index];
    tweetButton.addEventListener('click', () => {
      const tweetItemId = 'id' + Date.parse(new Date()).toString();
      const userName = document.querySelector('#name').innerText
      const userPhoto = document.querySelector('.nav-photo').src
      const element = tweetButton.title
      const input = document.querySelector(`#${element}`)
      const inputValue = input.value;
      let tweetItem = `
        <div class="tweet-profile" id="${tweetItemId}">
          <a href="#">
            <img src="${userPhoto}" class="main-content-photo image" alt="my profile picture">
          </a>
          <div class="user-data"> 
            <strong class="profile-name">${userName}</strong>
            <span class="button-container">
              <button class="delete-button" title="${tweetItemId}">X</button>
            </span>
            <p class="tweet-text">${inputValue}</p>
            <div>
              <!-- <img src="#" alt=""> -->
            </div>
            <div class="tweet-info">
              <a href="#"><i class="fa fa-comment-o"></i>5.1k</a>
              <a href="#"><i class='fas fa-retweet'></i>2.1k</a>
              <a href="#"><i class="fa fa-heart-o"></i>3.1k</a>
              <a href="#"><i class="fa fa-upload"></i></a>
            </div>
            <div class="delete-modal ${tweetItemId}">
              <h3>Delete Tweet?</h3>
              <p>This can't be undone and it will be removed from your timeline.</p>
              <button class="cancel-button">Cancel</button>
              <button class="confirm-button" title="${tweetItemId}">Delete</button>
            </div>
          </div>  
        </div>
      `
      tweetItem += tweetOutput.innerHTML;
      tweetOutput.innerHTML = tweetItem;

      if (tweetContainer.style.display == 'block') {
        tweetContainer.style.display = 'none';
        tweetModalOverlay.style.display = 'none';
      }

      const addItemToIndexDb = {
        tweetItemId: tweetItemId,
        inputValue: inputValue
      }
      addEntryToDb('tweet-item', addItemToIndexDb);
      deleteTweetItem()

      input.value = '';
    })
  }
}

const getTweetItemFromDb = async () => {
  const tweetOutput = document.querySelector('#tweet-output')
  const userProfile = await getEntryFromDb('profile');
  const userTweets = await getEntryFromDb('tweet-item');
  const tweetItems = userTweets.reverse().map((tweetItem) => {
    return `
      <div class="tweet-profile" id="${tweetItem.tweetItemId}">
        <a href="#">
          <img src="${userProfile[0] ? userProfile[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}"
          class="main-content-photo image" alt="my profile picture">
        </a>
        <div class="user-data"> 
          <strong class="profile-name">${userProfile[0] ? userProfile[0].profileName : 'Jane Doe'}</strong>
          <span class="button-container">
            <button class="delete-button" title="${tweetItem.tweetItemId}">X</button>
          </span>
          <p class="tweet-text">${tweetItem.inputValue}</p>
          <div>
            <!-- <img src="#" alt=""> -->
          </div>
          <div class="tweet-info">
            <a href="#"><i class="fa fa-comment-o"></i>5.1k</a>
            <a href="#"><i class='fas fa-retweet'></i>2.1k</a>
            <a href="#"><i class="fa fa-heart-o"></i>3.1k</a>
            <a href="#"><i class="fa fa-upload"></i></a>
          </div>
          <div class="delete-modal ${tweetItem.tweetItemId}">
            <h3>Delete Tweet?</h3>
            <p>This can't be undone and it will be removed from your timeline.</p>
            <button class="cancel-button">Cancel</button>
            <button class="confirm-button" title="${tweetItem.tweetItemId}">Delete</button>
          </div>
        </div>  
      </div>
    `
  })
  tweetOutput.innerHTML = tweetItems.join('');
  deleteTweetItem();
}

const deleteTweetItem = () => {
  const tweetModalOverlay = document.querySelector('#tweet-modal-overlay');
  const deleteButtons = document.querySelectorAll('.delete-button')
  for (let index = 0; index < deleteButtons.length; index++) {
    const deleteButton = deleteButtons[index];
    deleteButton.addEventListener('click', () => {
      const element = deleteButton.title;
      const deleteModal = document.querySelector(`.${element}`);
      deleteModal.style.display = 'block';
      tweetModalOverlay.style.display = 'block';
    })
  }

  const confirmButtons = document.querySelectorAll('.confirm-button')
  for (let index = 0; index < confirmButtons.length; index++) {
    const confirmButton = confirmButtons[index];
    confirmButton.addEventListener('click', () => {
      const tweetOutput = document.querySelector('#tweet-output')
      const element = confirmButton.title
      const tweetItem = document.querySelector(`#${element}`);
      tweetOutput.removeChild(tweetItem);
      tweetModalOverlay.style.display = 'none';

      deleteEntry('tweet-item', element)
    })
  }

  const cancelButtons = document.querySelectorAll('.cancel-button')
  for (let index = 0; index < cancelButtons.length; index++) {
    const cancelButton = cancelButtons[index];
    cancelButton.addEventListener('click', () => {
      const deleteModal = cancelButton.parentElement;
      deleteModal.style.display = 'none';
      tweetModalOverlay.style.display = 'none';
    })
  }
}

export { addTweetItemToDb, getTweetItemFromDb }
