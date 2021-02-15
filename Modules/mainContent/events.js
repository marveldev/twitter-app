import { addEntryToDb, getEntryFromDb, deleteEntry } from '../../dataStorage.js'

const tweetItemEvents = () => {
  let elementProperty
  const deleteButtons = document.querySelectorAll('.delete-button')
  deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', () => {
      elementProperty = deleteButton.getAttribute('property')
      document.querySelector('#overlay').style.display = 'block'
      document.querySelector('.delete-modal').style.display = 'block'
    })
  })

  const confirmButton = document.querySelector('.confirm-button')
  confirmButton.addEventListener('click', () => {
    const tweetOutput = document.querySelector('#tweetOutput')
    const tweetItem = document.querySelector(`#${elementProperty}`)
    tweetOutput.removeChild(tweetItem)
    document.querySelector('.delete-modal').style.display = 'none'
    document.querySelector('#overlay').style.display = 'none'
    deleteEntry('tweet-data', elementProperty)
  })

  const cancelButtons = document.querySelectorAll('.cancel-button')
  cancelButtons.forEach(cancelButton => {
    cancelButton.addEventListener('click', () => {
      document.querySelector('#overlay').style.display = 'none'
      document.querySelector('.delete-modal').style.display = 'none'
    })
  })

  const commentButtons = document.querySelectorAll('.comment-button')
  commentButtons.forEach(commentButton => {
    commentButton.addEventListener('click', () => {
      const elementProperty = commentButton.getAttribute('property')
      const commentModal = document.querySelector(`.${elementProperty}`)
      commentModal.style.display = 'block'
      document.querySelector('#overlay').style.display = 'block'
    })
  })

  const commentModalButtons = document.querySelectorAll('.comment-modal-button')
  commentModalButtons.forEach(commentModalButton => {
    commentModalButton.addEventListener('click', () => {
      commentModalButton.parentElement.parentElement.style.display = 'none'
      document.querySelector('#overlay').style.display = 'none'
    })
  })

  const addCommentButtons = document.querySelectorAll('.add-comment-button')
  addCommentButtons.forEach(addCommentButton => {
    addCommentButton.addEventListener('click', () => {
      addCommentButton.parentElement.parentElement.style.display = 'none'
      document.querySelector('#overlay').style.display = 'none'
    })
  })
}

const commentModal = (tweetItemId, userName, userPhoto, inputValue) => {
  return `
    <div class="comment-modal-container ${tweetItemId}">
      <div>
        <button class="comment-modal-button">X</button>
      </div>
      <div class="comment-output">
        <img src="${userPhoto}" class="main-content-photo image" alt="photo">
        <div>
          <span class="profile-name">${userName}</span>
          <p class="comment">${inputValue}</p>
        </div>
      </div>
      <div class="tweet-input">
        <img src="${userPhoto}" class="main-content-photo image" alt="photo">
        <textarea class="comment-box" placeholder="Add another Tweet?"></textarea>
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
        <button class="add-comment-button">Tweet</button>
      </div>
    </div>
  `
}

const addTweetItemToDb = (input) => {
  const addTweetButtons = document.querySelectorAll('.add-tweet-button')
  const tweetContainer = document.querySelector('.tweet-modal-container')
  const tweetOutput = document.querySelector('#tweetOutput')

  addTweetButtons.forEach(addTweetButton => {
    addTweetButton.addEventListener('click', () => {
      if (input.value.trim().length >= 1) {
        const tweetItemId = 'id' + Date.parse(new Date()).toString()
        const userName = document.querySelector('.profile-name').innerText
        const userPhoto = document.querySelector('.left-nav-photo').src
        const inputValue = input.value
        let tweetItem = `
          <div class="tweet-item" id="${tweetItemId}">
            <img src="${userPhoto}" class="main-content-photo image" alt="photo">
            <div>
              <strong class="profile-name">${userName}</strong>
              <button class="delete-button" property="${tweetItemId}">X</button>
              <p class="tweet-text">${inputValue}</p>
              <div class="tweet-info">
                <button><i class="fa fa-comment-o"></i>5.1k</button>
                <button><i class='fas fa-retweet'></i>2.1k</button>
                <button><i class="fa fa-heart-o"></i>3.1k</button>
                <button><i class="fa fa-upload"></i></button>
              </div>
            </div>
          </div>
        `
        tweetItem += tweetOutput.innerHTML
        tweetOutput.innerHTML = tweetItem

        if (tweetContainer.style.display == 'block') {
          tweetContainer.style.display = 'none'
          document.querySelector('#overlay').style.display = 'none'
        }

        input.value = ''

        const addItemToIndexDb = {
          tweetItemId: tweetItemId,
          userPhoto: userPhoto,
          userName: userName,
          inputValue: inputValue
        }

        addEntryToDb('tweet-data', addItemToIndexDb)
        tweetItemEvents()
      }
    })
  })
}

const getTweetItemFromDb = async () => {
  const tweetOutput = document.querySelector('#tweetOutput')
  const tweetData = await getEntryFromDb('tweet-data')
  const tweetItems = tweetData.reverse().map((tweetItem) => {
    const { tweetItemId, userPhoto, userName, inputValue } = tweetItem
    return `
      <div id="${tweetItemId}">
        <div class="tweet-item">
          <img src="${userPhoto}" class="main-content-photo image" alt="photo">
          <div>
            <strong class="profile-name">${userName}</strong>
            <button class="delete-button" property="${tweetItemId}">X</button>
            <p class="tweet-text">${inputValue}</p>
            <div class="tweet-info">
              <button class="comment-button" property="${tweetItemId}">
                <i class="fa fa-comment-o"></i>5.1k
              </button>
              <button><i class="fa fa-retweet"></i>2.1k</button>
              <button><i class="fa fa-heart-o"></i>3.1k</button>
              <button><i class="fa fa-upload"></i></button>
            </div>
          </div>
        </div>
        ${commentModal(tweetItemId, userName, userPhoto, inputValue)}
      </div>
    `
  })

  tweetOutput.innerHTML = tweetItems.join('')
  tweetItemEvents()
}

const addMainContentEvents = () => {
  const input = document.querySelector('.input')
  const messageButton = document.querySelector('.message-btn')
  messageButton.addEventListener('click', () => {
    messageButton.parentElement.style.display = 'none'
  })

  input.addEventListener('keypress', () => {
    input.style.height = "1px"
    input.style.height = (3+input.scrollHeight)+"px"
  })

  addTweetItemToDb(input)
  getTweetItemFromDb()
}

export default addMainContentEvents
export { addTweetItemToDb, getTweetItemFromDb }
