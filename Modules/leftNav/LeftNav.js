import { getEntryFromDb } from '../../dataStorage.js'

const dropdownModal = `
  <div class="dropdown-content">
    <button><i class="material-icons">&#xe8e1;</i>Topics</button>
    <button><i class="fa fa-bolt"></i>Moments</button>
    <button><i class="fa fa-external-link-square"></i>Twitter Ads</button>
    <button><i class="fa fa-bar-chart"></i>Analytics</button>
    <button id="editProfileButton"><i class="material-icons">&#xe8b8;</i>Edit Profile</button>
    <button><i class="fa fa-question-circle-o"></i>Help Center</button>
    <button id="themeButton"><i class="material-icons">&#xe3ae;</i>Display</button>
  </div>
`
const themeModal = `
  <div class="theme-modal">
    <p>Background</p>
    <button id="defaultButton">DEFAULT</button>
    <button id="dimButton">DIM</button>
    <button id="lightOutButton">Lights Outs</button>
  </div>
`

const LeftNav = async () => {
  const userData = await getEntryFromDb('user-data')
  return `
    <div class="left-nav">
      <div class="left-nav-content">
        <button id="logo"><i class="fa">&#xf099;</i></button>
        <button><i class="glyphicon glyphicon-home"></i><strong>Home</strong></button>
        <button><i class="fa fa-hashtag"></i><strong>Explore</strong></button>
        <button><i class="fa fa-bell-o"></i><strong>Notifications</strong></button>
        <button><i class="fa fa-envelope-o"></i><strong>Messages</strong></button>
        <button><i class="fa fa-bookmark-o"></i><strong>Bookmarks</strong></button>
        <button><i class="fa fa-list-alt"></i><strong>Lists</strong></button>
        <button><i class="fa fa-user-o"></i><strong>Profile</strong></button>
        <button id="dropdownButton"><i class="fa fa-caret-down"></i><strong>More</strong></button>
        <button id="tweet-modal-icon"><i class='fas fa-feather-alt'></i></button>
        <button id="tweetModalButton">Tweet</button>
        <div>
          <img src=${userData[0] ? userData[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
            class="left-nav-photo image" alt="photo">
          <strong class="profile-name">${userData[0] ? userData[0].userName : 'Jane Doe'}</strong>
        </div>
      </div>
      <div>
        <div class="edit-profile-modal">
          <div>
            <strong>Edit Profile</strong>
            <button id="closeProfileButton">X</button>
          </div>
          <div>
            <div class="profile-entry">
              <div>
                <img src=${userData[0] ? userData[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
                  id="photo" alt="photo">
                <input type="file" id="profilePhoto">
                <label for="profilePhoto">
                  <strong id="editPhoto">EDIT PHOTO</strong>
                </label>
              </div>
              <input type="text" id="nameInput" placeholder="Enter new name..." required/>
            </div>
            <button type="submit" id="saveProfileButton">Save</button>
          </div>
        </div>
        <div class="tweet-modal-container">
          <button id="closeTweetButton">X</button>
          <div class="tweet-input"> 
            <img src=${userData[0] ? userData[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
              class="main-content-photo image" alt="photo">
            <div>
              <textarea class="tweet-input-box" placeholder="What's happening?"></textarea>
              <strong>Everyone can reply</strong>
            </div>
          </div>
          <div class="tweet-options">
            <input type="file" id="addPhoto">
            <label for="addPhoto">
              <span><i class="fa fa-file-picture-o" id="photoIcon"></i></span>
            </label>
            <span><i class="material-icons">&#xe908</i></span>
            <span><i class="fa fa-bar-chart"></i></span>
            <span><i class="fa fa-smile-o"></i></span>
            <span><i class="fa fa-calendar-plus-o"></i></span>
            <button class="add-tweet-button">Tweet</button>
          </div>
        </div>
        ${dropdownModal}
        ${themeModal}
      </div>
    </div>
    <nav class="smallscreen-left-nav">
      <button>
        <img src=${userData[0] ? userData[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
        class="left-nav-photo image" alt="photo">
        <strong class="profile-name">${userData[0] ? userData[0].profileName : 'Jane Doe'}</strong>
      </button>
      <button><i class='fab fa-rocketchat'></i>Topics</button>
      <button><i class="fa fa-bolt"></i>Moments</button>
      <button id="editProfile"><i class="material-icons">&#xe8b8;</i>Edit Profile</button>
      <button><i class='fas fa-user-alt'></i>Profile</button>
      <button><i class="fa fa-question-circle-o"></i>Help Center</button>
      <button id="displayButton"><i class="material-icons">&#xe3ae;</i>Display</button>
    </nav>
    <nav class="smallscreen-nav">
      <button id="smallscreen-modal"><i class='fas fa-feather-alt'></i></button>
      <button id="smallscreen-home"><i class="glyphicon glyphicon-home"></i></button>
      <button id="smallscreen-trend"><i class="fa fa-search"></i></button>
      <button><i class="fas fa-bell"></i></button>
      <button><i class="fa fa-envelope-o"></i></button>  
    </nav>
  `
}

export default LeftNav
