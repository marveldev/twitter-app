import { getEntryFromDb } from '../../dataStorage.js';

const MainContent = async () => {
  const userProfile = await getEntryFromDb('profile');
  return `  
    <div class="main-content">
      <div class="top-nav">
        <div id="message">
          <strong>ENTRY ADDED SUCCESSFULLY</strong>
          <button class="message-btn">OK</button>
        </div>
        <a href="#">
          <img src=${userProfile[0] ? userProfile[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
            class="small-screen-photo image" alt="my profile picture">
        </a>
        <strong>Home</strong>
      </div>
      <div class="user-options">
        <div class="user-input"> 
          <a href="#" id="photo-container">
            <img src=${userProfile[0] ? userProfile[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
            class="profile-photo image" alt="my profile picture">
          </a>
          <div>
            <textarea id="tweet" class="input" placeholder="What's happening?"></textarea>
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
          <button class="add-tweet-button" title="tweet" disabled>Tweet</button>
        </div> 
      </div>
      <div id="tweet-output"></div>
    </div>
  `
}
export default MainContent;
