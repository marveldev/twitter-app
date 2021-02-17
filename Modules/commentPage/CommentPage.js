import { addEntryToDb, clearAllEntries, getEntryFromDb } from "../../dataStorage.js"

const CommentPage = async () => {
  const commentData = await getEntryFromDb('comment-data')
  console.log(commentData);
  
  // const { userPhoto, userName, inputValue } = tweetItemObject

  return `
    <div class="comment-page">
      <div class="home">
        <button id="returnButton"><i class="material-icons">&#xe5c4;</i></button>
        <span>Tweet</span>
      </div>
      <div class="comment-content">
        <div>
          <img src="${userPhoto}" class="home-page-photo image" alt="photo">
          <strong class="user-profile-name">${userName}</strong>
          <button class="more-button"><i class="material-icons">&#xe5d3;</i></button>
        </div>
        <div>
          <p class="comment-text">${inputValue}</p>
          <p>2:51pm. Feb 15, 2021. Twitter Web App</p>
        </div>
        <div class="comment-interaction">
          <span><strong>42 </strong>Retweets</span>
          <span><strong>12 </strong>Quote Tweets</span>
          <span><strong>675 </strong>Likes</span>
        </div>
        <div class="comment-options">
          <button class="comment-button"><i class="fa fa-comment-o"></i></button>
          <button><i class="fa fa-retweet"></i></button>
          <button><i class="fa fa-heart-o"></i></button>
          <button><i class="fa fa-upload"></i></button>
        </div>
        <div id="replyOutput"></div>
      </div>
      <div class="comment-modal-container">
        <div>
          <button class="comment-modal-button">X</button>
        </div>
        <div class="about-comment">
          <img src="" class="home-page-photo image" alt="photo">
          <div>
            <span class="user-profile-name">Jane Doe</span>
            <p>hey</p>
          </div>
        </div>
        <div class="tweet-input">
          <img src="" class="home-page-photo image" alt="photo">
          <textarea class="comment-box" placeholder="Tweet your reply"></textarea>
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
          <button class="add-comment-button">Reply</button>
        </div>
      </div>
    </div>
  `
}

export default CommentPage
