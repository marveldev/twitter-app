import { addEntryToDb, getEntryFromDb, deleteEntry } from '../../dataStorage.js';

const addTweetItemToDb = (input) => {
  const addTweetButtons = document.querySelectorAll('.add-tweet-button')
  const tweetContainer = document.querySelector('.tweet-modal-container')
  const tweetOutput = document.querySelector('#tweetOutput')

  addTweetButtons.forEach(addTweetButton => {
    addTweetButton.addEventListener('click', () => {
      if (input.value.trim().length >= 1) {
        const tweetItemId = 'id' + Date.parse(new Date()).toString();
        const userName = document.querySelector('.profile-name').innerText
        const userPhoto = document.querySelector('.left-nav-photo').src
        const inputValue = input.value
        let tweetItem = `
          <div class="tweet-item" id="${tweetItemId}">
            <img src="${userPhoto}" class="main-content-photo image" alt="photo">
            <div>
              <strong class="profile-name">${userName}</strong>
              <button class="delete-button" title="${tweetItemId}">X</button>
              <p class="tweet-text">${inputValue}</p>
              <div class="tweet-info">
                <button><i class="fa fa-comment-o"></i>5.1k</button>
                <button><i class='fas fa-retweet'></i>2.1k</button>
                <button><i class="fa fa-heart-o"></i>3.1k</button>
                <button><i class="fa fa-upload"></i></button>
              </div>
            </div>
          </div>
        `
        tweetItem += tweetOutput.innerHTML;
        tweetOutput.innerHTML = tweetItem;

        if (tweetContainer.style.display == 'block') {
          tweetContainer.style.display = 'none';
          document.querySelector('#overlay').style.display = 'none';
        }

        const addItemToIndexDb = {
          tweetItemId: tweetItemId,
          userPhoto: userPhoto,
          userName: userName,
          inputValue: inputValue
        }

        addEntryToDb('tweet-data', addItemToIndexDb);
        // deleteTweetItem()
        input.value = '';
      }
    })
  });
}

const getTweetItemFromDb = async () => {
  const tweetOutput = document.querySelector('#tweetOutput')
  const tweetData = await getEntryFromDb('tweet-data');
  const tweetItems = tweetData.reverse().map((tweetItem) => {
    const { tweetItemId, userPhoto, userName, inputValue } = tweetItem
    return `
      <div class="tweet-item" id="${tweetItemId}">
        <img src="${userPhoto}" class="main-content-photo image" alt="photo">
        <div>
          <strong class="profile-name">${userName}</strong>
          <button class="delete-button" title="${tweetItemId}">X</button>
          <p class="tweet-text">${inputValue}</p>
          <div class="tweet-info">
            <button><i class="fa fa-comment-o"></i>5.1k</button>
            <button><i class='fas fa-retweet'></i>2.1k</button>
            <button><i class="fa fa-heart-o"></i>3.1k</button>
            <button><i class="fa fa-upload"></i></button>
          </div>
        </div>
      </div>
    `
  })

  tweetOutput.innerHTML = tweetItems.join('');
  // deleteTweetItem();
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

const addMainContentEvents = () => {
  const input = document.querySelector('.input')
  addTweetItemToDb(input)
  getTweetItemFromDb()
}

export default addMainContentEvents
export { addTweetItemToDb, getTweetItemFromDb }
