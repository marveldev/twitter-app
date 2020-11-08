import { getEntryFromDb } from '../../dataStorage.js';

const modal = async () => {
  const userProfile = await getEntryFromDb('profile');
  return `
    <section>
      <div id="tweet-modal-overlay"></div>
      <div id="dropdown-overlay"></div>
      <div>
        <div class="dropdown-content">
          <a href="#"><i class='fab fa-rocketchat'></i>Topics</a>
          <a href="#"><i class="fa fa-bolt"></i>Moments</a>
          <a href="#"><i class="fa fa-external-link-square"></i>Twitter Ads</a>
          <a href="#"><i class="fa fa-bar-chart"></i>Analytics</a>
          <a href="#" id="profileButton"><i class="material-icons">&#xe8b8;</i>Edit Profile</a>
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
          <img src=${userProfile[0] ? userProfile[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
          class="main-content-photo image" alt="my profile picture">
          <div>
            <textarea class="text input" id="clickme" placeholder="What's happening?"></textarea>
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
          <button class="add-tweet-button" title="clickme" disabled>Tweet</button>
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
          <span>Trends for you</span>
          <input type="checkbox" />
          <small>You can personalize trends based on your location and who you follow</small>
        </div>  
      </div> 
      <div class="edit-profile-modal">
        <div class="heading">
          <strong>Edit Profile</strong>
          <button id="profileModalButton">X</button>
        </div>
        <form class="bio-form">
          <div class="profile-entry">
            <div>
              <img src=${userProfile[0] ? userProfile[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
              id="photo" alt="photo">
              <input type="file" id="profilePhoto">
              <label for="profilePhoto">
                <strong id="editPhoto" tabindex="1">EDIT PHOTO</strong>
              </label>
            </div>
            <input type="text" id="profileInput" placeholder="Enter new name..."
            value="${userProfile[0] ? userProfile[0].profileName : 'Jane Doe'}" required/>
          </div>
          <button type="submit" id="saveProfileButton">Save</button>
        </form>
      </div>
    </section> 
  `
}
export default modal;
