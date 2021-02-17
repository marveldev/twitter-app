import switchCurrentPage from "../helper.js"

const addCommentItemToDb = () => {
  const commentOutput = document.querySelector('#commentOutput')
  const commentBox = document.querySelector('.comment-box')

  if (commentBox.value.trim().length >= 1) {
    const commentItemId = 'id' + Date.parse(new Date()).toString()
    // const userName = document.querySelector('.profile-name').innerText
    // const userPhoto = document.querySelector('.left-nav-photo').src
    const commentBoxValue = commentBox.value
    let commentItem = `
      <div class="comment-item" id="${commentItemId}">
        <div class="comment-content-item">
          <img src="" class="main-content-photo image" alt="photo">
          <div>
            <strong class="profile-name">Jane Doe</strong>
            <p class="comment-text">Hey</p>
            <div class="comment-info">
              <button class="comment-button" property="${commentItemId}">
                <i class="fa fa-comment-o"></i>5.1k
              </button>
              <button><i class="fa fa-recomment"></i>2.1k</button>
              <button><i class="fa fa-heart-o"></i>3.1k</button>
              <button><i class="fa fa-upload"></i></button>
            </div>
          </div>
        </div>
        <button class="delete-button" property="${commentItemId}">
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    `
    commentItem += commentOutput.innerHTML
    commentOutput.innerHTML = commentItem

    commentBox.value = ''

    document.querySelector('.comment-modal-container').style.display = 'none'
    document.querySelector('#overlay').style.display = 'none'

    // const addItemToIndexDb = {
    //   commentItemId: commentItemId,
    //   userPhoto: userPhoto,
    //   userName: userName,
    //   commentBoxValue: commentBoxValue
    // }

    // addEntryToDb('comment-data', addItemToIndexDb)
  }
}

const addCommentPageEvents = async () => {
  const commentModal = document.querySelector('.comment-modal-container')
  const overlay = document.querySelector('#overlay')
  document.querySelector('#returnButton').addEventListener('click', () => {
    switchCurrentPage('homePage')
  })

  const commentButtons = document.querySelectorAll('.comment-button')
  commentButtons.forEach(commentButton => {
    commentButton.addEventListener('click', () => {
      commentModal.style.display = 'block'
      overlay.style.display = 'block'
    })
  })

  const commentModalButtons = document.querySelectorAll('.comment-modal-button')
  commentModalButtons.forEach(commentModalButton => {
    commentModalButton.addEventListener('click', () => {
      commentModal.style.display = 'none'
      overlay.style.display = 'none'
    })
  })

  const addCommentButtons = document.querySelectorAll('.add-comment-button')
  addCommentButtons.forEach(addCommentButton => {
    addCommentButton.addEventListener('click', () => {
      addCommentItemToDb()
    })
  })
}

export default addCommentPageEvents
