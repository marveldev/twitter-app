import { addEntryToDb, getEntryFromDb } from "../../dataStorage.js"
import switchCurrentPage from "../helper.js"

const addreplyItemToDb = () => {
  const replyOutput = document.querySelector('#replyOutput')
  const commentBox = document.querySelector('.comment-box')

  if (commentBox.value.trim().length >= 1) {
    const replyItemId = 'id' + Date.parse(new Date()).toString()
    const userName = document.querySelector('.profile-name').innerText
    const userPhoto = document.querySelector('.left-nav-photo').src
    const commentBoxValue = commentBox.value
    let replyItem = `
      <div class="reply-item" id="${replyItemId}">
        <div class="reply-content-item">
          <img src="${userPhoto}" class="home-page-photo image" alt="photo">
          <div>
            <strong class="user-profile-name">${userName}</strong>
            <p>${commentBoxValue}</p>
            <div class="reply-item-options">
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
    replyItem += replyOutput.innerHTML
    replyOutput.innerHTML = replyItem

    commentBox.value = ''

    document.querySelector('.comment-modal-container').style.display = 'none'
    document.querySelector('#overlay').style.display = 'none'

    const addItemToIndexDb = {
      replyItemId: replyItemId,
      userName: userName,
      userPhoto: userPhoto,
      commentBoxValue: commentBoxValue
    }

    addEntryToDb('reply-data', addItemToIndexDb)
  }
}

const getreplyItemFromDb = async () => {
  const replyData = await getEntryFromDb('reply-data')
  const replyItems = replyData.reverse().map((replyItem) => {
    const { replyItemId, userName,userPhoto, commentBoxValue } = replyItem
    return `
      <div class="reply-item" id="${replyItemId}">
        <div class="reply-content-item">
          <img src="${userPhoto}" class="home-page-photo image" alt="photo">
          <div>
            <strong class="user-profile-name">${userName}</strong>
            <p>${commentBoxValue}</p>
            <div class="reply-item-options">
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

  document.querySelector('#replyOutput').innerHTML = replyItems.join('')
}

const addCommentPageEvents = async () => {
  const commentModal = document.querySelector('.comment-modal-container')
  const overlay = document.querySelector('#overlay')
  document.querySelector('#returnButton').addEventListener('click', () => {
    switchCurrentPage('homePage')
  })

  document.querySelector('.comment-button').addEventListener('click', () => {
    commentModal.style.display = 'block'
    overlay.style.display = 'block'
  })

  document.querySelector('.comment-modal-button').addEventListener('click', () => {
    commentModal.style.display = 'none'
    overlay.style.display = 'none'
  })

  document.querySelector('.add-reply-button').addEventListener('click', () => {
    addreplyItemToDb()
  })

  getreplyItemFromDb()
}

export default addCommentPageEvents
