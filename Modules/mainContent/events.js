import { addEntryToDb, getEntryFromDb, deleteEntry } from '../../dataStorage.js';

const addTweetItemToDb = () => {
  const tweetButtons = document.querySelectorAll('.add-tweet-button')
  for (let index = 0; index < tweetButtons.length; index++) {
    const tweetButton = tweetButtons[index];
    tweetButton.addEventListener('click', () => {
      const userName = document.querySelector('#name').innerText
      const userPhoto = document.querySelector('.nav-photo').src
      const tweetOutput = document.querySelector('#tweet-output')
      const element = tweetButton.title
      const inputValue = document.querySelector(`#${element}`).value
      const tweetItemId = 'id' + Math.random().toString(36).substring(7);

      let tweetItem = `
        <div class="tweet-profile" id="${tweetItemId}">
          <a href="#">
            <img src="${userPhoto}" class="main-content-photo image" alt="my profile picture">
          </a>
          <div class="user-data"> 
            <strong class="profile-name">${userName}</strong>
            <button class="delete-button">X</button>
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
            <div class="delete-modal">
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

      const addItemToIndexDb = {
        tweetItemId: tweetItemId,
        inputValue: inputValue
      }
      addEntryToDb('tweet-item', addItemToIndexDb);
      deleteTweetItem()
    })
  }
}

const getTweetItemFromDb = async () => {
  const tweetOutput = document.querySelector('#tweet-output')
  const userProfile = await getEntryFromDb('profile');
  const userTweets = await getEntryFromDb('tweet-item');
  const tweetItems = userTweets.map((tweetItem) => {
    return `
      <div class="tweet-profile" id="${tweetItem.tweetItemId}">
        <a href="#">
          <img src="${userProfile[0].photoSource}" class="main-content-photo image" alt="my profile picture">
        </a>
        <div class="user-data"> 
          <strong class="profile-name">${userProfile[0].profileName}</strong>
          <button class="delete-button">X</button>
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
          <div class="delete-modal">
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

  const profilePhotos = document.querySelectorAll('.image')
  for (let index = 0; index < profilePhotos.length; index++) {
    const profilePhoto = profilePhotos[index];
    profilePhoto.src = userProfile[0].photoSource
  }

  const name = document.querySelector('#name')
  name.innerText = userProfile[0].profileName;

  deleteTweetItem()
}

const deleteTweetItem = () => {
  const tweetModalOverlay = document.querySelector('#tweet-modal-overlay');
  const deleteButtons = document.querySelectorAll('.delete-button')
  for (let index = 0; index < deleteButtons.length; index++) {
    const deleteButton = deleteButtons[index];
    deleteButton.addEventListener('click', () => {
      const deleteModal = deleteButton.parentElement.lastElementChild;
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
}

export { addTweetItemToDb, getTweetItemFromDb }
