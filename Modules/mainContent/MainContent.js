import { getEntryFromDb } from '../../dataStorage.js'

const deleteModal = `
  <div class="delete-modal">
    <h3>Delete Tweet?</h3>
    <p>This can't be undone and it will be removed from your timeline.</p>
    <button class="cancel-button">Cancel</button>
    <button class="confirm-button">Delete</button>
  </div>
`

const MainContent = async () => {
  const userData = await getEntryFromDb('user-data')
  return `
    <div class="main-content">
      <div id="message">
        <strong>ENTRY ADDED SUCCESSFULLY</strong>
        <button class="message-btn">OK</button>
      </div>
      <div class="home">
        <span>Home</span>
        <img src=${userData[0] ? userData[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
          class="small-screen-photo image" alt="photo">
      </div>
      <div class="user-options">
        <div class="user-input"> 
          <img src=${userData[0] ? userData[0].photoSource : 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'}
            class="profile-photo image" alt="photo">
          <div>
            <textarea class="input" placeholder="What's happening?"></textarea>
            <div>
              <img src="#" alt="">
            </div>
            <button><strong>Everyone can reply</strong></button>
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
      <div id="tweetOutput"></div>
      <div id="deleteModalContainer">${deleteModal}</div>
    </div>
  `
}

export default MainContent
export { deleteModal }
