const pusher = new Pusher('543dcb89c8f5bd0dc804', {
  cluster: 'eu'
});

const channel = pusher.subscribe('tweet');
channel.bind('send-message', data => {
  const tweetItemId = 'id' + Date.parse(new Date()).toString();
  const tweetContainer = document.querySelector('.tweet-modal-container');
  const tweetOutput = document.querySelector('#tweet-output');
  const tweetModalOverlay = document.querySelector('#tweet-modal-overlay');
  const { user, textValue } = data
  let tweetItem = `
    <div class="tweet-profile" id="${tweetItemId}">
      <a href="#">
        <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"
          class="main-content-photo image" alt="my profile picture">
      </a>
      <div class="user-data"> 
        <strong class="profile-name">${user}</strong>
        <span class="button-container">
          <button class="delete-button" title="${tweetItemId}">X</button>
        </span>
        <p class="tweet-text">${textValue}</p>
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
});
