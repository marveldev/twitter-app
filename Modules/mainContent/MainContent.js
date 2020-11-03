import { getEntryFromDb } from '../../dataStorage.js';

const mainContent = async () => {
  const userProfile = await getEntryFromDb('profile');
  return `  
    <div class="main-content">
      <div class="top-nav">
        <a href="#">
          <img src=${userProfile ? userProfile[0].photoSource : "https://images.pexels.com/photos/3921857/pexels-photo-3921857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            class="small-screen-photo image" alt="my profile picture">
        </a>
        <strong>Home</strong>
      </div>
      <div class="user-options">
        <div class="user-input"> 
          <a href="#" id="photo-container">
          <img src=${userProfile ? userProfile[0].photoSource : "https://images.pexels.com/photos/3921857/pexels-photo-3921857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
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
      <div id="tweet-output"></div>
    </div>
  `
}
export default mainContent;
