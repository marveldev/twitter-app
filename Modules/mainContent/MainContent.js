const mainContent = () => {
  return `  
    <div class="main-content">
      <div class="top-nav">
        <a href="#">
          <img src="https://images.pexels.com/photos/3921857/pexels-photo-3921857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="small-screen-photo image" alt="my profile picture">
        </a>
        <strong>Home</strong>
      </div>
      <div class="user-options">
        <div class="user-input"> 
          <a href="#" id="photo-container">
            <img src="https://images.pexels.com/photos/3921857/pexels-photo-3921857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
              class="profile-photo image" alt="my profile picture">
          </a>
          <div>
            <textarea id="tweet" placeholder="What's happening?"></textarea>
            <div>
              <img src="#" alt="">
            </div>
            <a href="#"><strong>Everyone can reply</strong></a>
          </div>
        </div>
        <div class="tweet-options">
          <input type="file" id="addPhoto">
          <label for="addPhoto">
            <i class="fa fa-file-picture-o" id="photoIcon"></i>
          </label>
          <a href="#"><i class="material-icons">&#xe908;</i></a>
          <a href="#"><i class="fa fa-bar-chart"></i></a>
          <a href="#"><i class="fa fa-smile-o"></i></a>
          <a href="#"><i class="fa fa-calendar-plus-o"></i></a>
          <button class="add-tweet-button" title="tweet">Tweet</button>
        </div> 
      </div>
      <div id="tweet-output">
        <div class="tweet-profile">
          <a href="#">
            <img src="https://images.pexels.com/photos/3921857/pexels-photo-3921857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
              class="main-content-photo image" alt="my profile picture">
          </a>
          <div class="user-data"> 
            <strong class="profile-name">Jane Doe</strong>
            <button class="delete-button">X</button>
            <p class="tweet-text">Don’t limit yourself. Many people limit themselves to what they think they can do.
              You can go as far as your mind lets you. What you believe, remember, you can achieve.
            </p>
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
              <button class="confirm-button">Delete</button>
            </div>
          </div>  
        </div>
      </div>  
    </div>
  `
}
export default mainContent;
