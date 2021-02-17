import { addEntryToDb, getEntryFromDb, deleteEntry } from '../../dataStorage.js'
import switchCurrentPage from '../helper.js'

const addTweetItemEvents = () => {
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

  const tweetItems = document.querySelectorAll('.tweet-content-item')
  tweetItems.forEach(tweetItem => {
    tweetItem.addEventListener('click', () => {
      switchCurrentPage('commentPage')
    })
  })
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
            <div class="tweet-content-item">
              <img src="${userPhoto}" class="main-content-photo image" alt="photo">
              <div>
                <strong class="profile-name">${userName}</strong>
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
            <button class="delete-button" property="${tweetItemId}">
              <i class="fa fa-trash-o"></i>
            </button>
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
        addTweetItemEvents()
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
      <div class="tweet-item" id="${tweetItemId}">
        <div class="tweet-content-item">
          <img src="${userPhoto}" class="main-content-photo image" alt="photo">
          <div>
            <strong class="profile-name">${userName}</strong>
            <p class="tweet-text">${inputValue}</p>
            <div class="tweet-info">
              <button><i class="fa fa-comment-o"></i>5.1k</button>
              <button><i class="fa fa-retweet"></i>2.1k</button>
              <button><i class="fa fa-heart-o"></i>3.1k</button>
              <button><i class="fa fa-upload"></i></button>
            </div>
          </div>
        </div>
        <button class="delete-button" property="${tweetItemId}">
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    `
  })

  tweetOutput.innerHTML = tweetItems.join('')
  addTweetItemEvents()
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
