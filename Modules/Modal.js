const modal = () => {
  return `
    <div>
      <div id="tweet-modal-overlay"></div>
      <div id="dropdown-overlay"></div>
      <div>
        <div class="dropdown-content">
          <a href="#"><i class='fab fa-rocketchat'></i>Topics</a>
          <a href="#"><i class="fa fa-bolt"></i>Moments</a>
          <a href="#"><i class="fa fa-external-link-square"></i>Twitter Ads</a>
          <a href="#"><i class="fa fa-bar-chart"></i>Analytics</a>
          <a href="#"><i class="material-icons">&#xe8b8;</i>Settings and privacy</a>
          <a href="#"><i class="fa fa-question-circle-o"></i>Help Center</a>
          <a href="#" id="display-button"><i class="material-icons">&#xe3ae;</i>Display</a>
        </div>  
        <div class="theme-modal">
          <p>Background</p>
          <button id="default-button">DEFAULT</button>
          <button id="dim-button">DIM</button>
          <button id="light-out-button">Lights Outs</button>
        </div>
      </div> 
      <div class="tweet-modal-container">
        <button id="close-modal-button">X</button>
        <div class="nav-input-modal"> 
          <img src="https://images.pexels.com/photos/3921857/pexels-photo-3921857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="main-content-photo" alt="my profile picture">
          <div>
            <textarea placeholder="What's happening?"></textarea>
            <a href="#"><strong>Everyone can reply</strong></a>
          </div>
        </div>
        <div class="tweet-options">
          <a href="#"><i class="fa fa-file-picture-o"></i></a>
          <a href="#"><i class="material-icons">&#xe908;</i></a>
          <a href="#"><i class="fa fa-bar-chart"></i></a>
          <a href="#"><i class="fa fa-smile-o"></i></a>
          <a href="#"><i class="fa fa-calendar-plus-o"></i></a>
          <button>Tweet</button>
        </div> 
      </div>
      <div class="trend-modal">
        <button id="close-trend-modal">X</button>
        <strong>Trends</strong>
        <div class="set-location">
          <p>Location</p>
          <span>Show content in this location</span>
          <input type="checkbox" />
          <small>When this is on, you'll see what's happening around you right now.</small>
        </div>
        <div class="set-trend">
          <p>Personalization</p>
          <span>Trends for you<span>
          <input type="checkbox" />
          <small>You can personalize trends based on your location and who you follow</small>
        </div>  
      </div>  
    </div> 
  `
}
export default modal;
