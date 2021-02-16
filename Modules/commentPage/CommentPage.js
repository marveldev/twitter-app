const CommentPage = () => {
  return `
    <div class="comment-page">
      <div class="home">
        <button id="returnButton"><i class="material-icons">&#xe5c4;</i></button>
        <span>Tweet</span>
      </div>
      <div class="comment-info">
        <div>
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" class="main-content-photo image" alt="photo">
          <strong class="profile-name">Jane Doe</strong>
          <button class="delete-button" property=""><i class="material-icons">&#xe5d3;</i></button>
        </div>
        <div>
          <p class="comment-text">Hey</p>
          <p>2:51pm. Feb 15, 2021. Twitter Web App</p>
        </div>
        <div class="comment-options">
          <button class="comment-button"><i class="fa fa-comment-o"></i></button>
          <button><i class="fa fa-retweet"></i></button>
          <button><i class="fa fa-heart-o"></i></button>
          <button><i class="fa fa-upload"></i></button>
        </div>
      </div>
    </div>
  `
}

export default CommentPage
