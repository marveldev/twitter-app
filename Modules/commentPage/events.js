import { addEntryToDb, getEntryFromDb } from "../../dataStorage.js"
import switchCurrentPage from "../helper.js"

const addcommentItemToDb = tweetId => {
  const commentOutput = document.querySelector('#commentOutput')
  const commentBox = document.querySelector('.comment-box')

  if (commentBox.value.trim().length >= 1) {
    const commentItemId = 'id' + Date.parse(new Date()).toString()
    const userName = document.querySelector('.profile-name').innerText
    const userPhoto = document.querySelector('.left-nav-photo').src
    const commentBoxValue = commentBox.value
    let commentItem = `
      <div class="comment-item" id="${commentItemId}">
        <div class="comment-content-item">
          <img src="${userPhoto}" class="home-page-photo image" alt="photo">
          <div>
            <strong class="user-profile-name">${userName}</strong>
            <p>${commentBoxValue}</p>
            <div class="comment-item-options">
              <button><i class="fa fa-comment-o"></i></button>
              <button><i class="fa fa-retweet"></i></button>
              <button><i class="fa fa-heart-o"></i></button>
              <button><i class="fa fa-upload"></i></button>
            </div>
          </div>
        </div>
        <button class="more-button" property=""><i class="material-icons">&#xe5d3;</i></button>
      </div>
    `
    commentItem += commentOutput.innerHTML
    commentOutput.innerHTML = commentItem

    commentBox.value = ''

    document.querySelector('.comment-modal-container').style.display = 'none'
    document.querySelector('#overlay').style.display = 'none'

    // const commentObject = {
    //   tweetId: tweetId,
    //   text: commentBoxValue
    // }

    // addEntryToDb('comment-data', commentObject)
  }
}

const getCommentItemFromDb = async () => {
  const commentData = await getEntryFromDb('comment-data')
  const commentItems = commentData.reverse().map((commentItem) => {
    const { commentItemId, userName,userPhoto, inputValue } = commentItem
    return `
      <div class="comment-item" id="${commentItemId}">
        <div class="comment-content-item">
          <img src="${userPhoto}" class="home-page-photo image" alt="photo">
          <div>
            <strong class="user-profile-name">${userName}</strong>
            <p>${inputValue}</p>
            <div class="comment-item-options">
              <button><i class="fa fa-comment-o"></i></button>
              <button><i class="fa fa-retweet"></i></button>
              <button><i class="fa fa-heart-o"></i></button>
              <button><i class="fa fa-upload"></i></button>
            </div>
          </div>
        </div>
        <button class="more-button" property=""><i class="material-icons">&#xe5d3;</i></button>
      </div>
    `
  })

  document.querySelector('#commentOutput').innerHTML = commentItems.join('')
}

const addCommentPageEvents = () => {
  const commentModal = document.querySelector('.comment-modal-container')
  const overlay = document.querySelector('#overlay')
  document.querySelector('#returnButton').addEventListener('click', () => {
    switchCurrentPage('homePage')
  })

  document.querySelector('.comment-modal-button').addEventListener('click', () => {
    commentModal.style.display = 'block'
    overlay.style.display = 'block'
  })

  document.querySelector('.close-comment-button').addEventListener('click', () => {
    commentModal.style.display = 'none'
    overlay.style.display = 'none'
  })

  document.querySelector('.add-comment-button').addEventListener('click', () => {
    const tweetId =  document.querySelector('.add-comment-button').id
    addcommentItemToDb(tweetId)
  })

  getCommentItemFromDb()
}

export default addCommentPageEvents
