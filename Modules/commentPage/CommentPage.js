const CommentPage = () => {
  return `
    <div class="comment-page">
      <div class="home">
        <button id="returnButton"><i class="material-icons">&#xe5c4;</i></button>
        <span>Tweet</span>
      </div>
      <div class="tweet-item" id="">
        <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" class="main-content-photo image" alt="photo">
        <div>
          <strong class="profile-name">Jane Doe</strong>
          <button class="delete-button" property=""><i class="material-icons">&#xe5d3;</i></button>
          <p class="tweet-text">Hey</p>
          <p>2:51pm. Feb 15, 2021. Twitter Web App</p>
          <div class="tweet-info">
            <button class="comment-button" property=""><i class="fa fa-comment-o"></i>5.1k</button>
            <button><i class="fa fa-retweet"></i>2.1k</button>
            <button><i class="fa fa-heart-o"></i>3.1k</button>
            <button><i class="fa fa-upload"></i></button>
          </div>
        </div>
      </div>
    </div>
  `
}

export default CommentPage
