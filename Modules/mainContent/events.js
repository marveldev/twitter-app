const addTweetEventListeners = () => {
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
        tweetItemId = tweetItemId,
        inputValue: inputValue
      }
      addEntryToDb('post-item', addItemToIndexDb);
    })
    
  }
}

export default addTweetEventListeners