import { getEntryFromDb } from '../../dataStorage.js';

const LeftNav = async () => {
  const userProfile = await getEntryFromDb('profile');
  return `
    <nav class="left-nav">
      <button class="logo"><i class='fab fa-twitter'></i></button>
      <button><i class="glyphicon glyphicon-home"></i><strong>Home</strong></button>
      <button><i class='fas fa-hashtag'></i><strong>Explore</strong></button>
      <button><i class='fas fa-bell'></i><strong>Notifications</strong></button>
      <button><i class="fa fa-envelope-o"></i><strong>Messages</strong></button>
      <button><i class="fa fa-bookmark-o"></i><strong>Bookmarks</strong></button>
      <button><i class="fa fa-list-alt"></i><strong>Lists</strong></button>
      <button><i class='fas fa-user-alt'></i><strong>Profile</strong></button>
      <button id="dropdown-button"><i class="fa fa-caret-down"></i><strong>More</strong></button>
      <button id="tweet-modal-icon"><i class='fas fa-feather-alt'></i></button>
      <button id="tweet-modal-button">Tweet</button>
      <div>
        <img src=${userProfile[0] ? userProfile[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
          class="nav-photo image" alt="photo">
        <strong class="profile-name" id="name">${userProfile[0] ? userProfile[0].profileName : 'Jane Doe'}</strong>
      </div>
    </nav>
    <nav class="smallscreen-left-nav">
      <button>
        <img src=${userProfile[0] ? userProfile[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
        class="nav-photo image" alt="photo">
        <strong class="profile-name" id="name">${userProfile[0] ? userProfile[0].profileName : 'Jane Doe'}</strong>
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

export default LeftNav;