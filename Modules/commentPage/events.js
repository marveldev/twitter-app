import { addEntryToDb, getEntryFromDb } from "../../dataStorage.js"
import switchCurrentPage from "../helper.js"

const addCommentItemToDb = () => {
  const replyOutput = document.querySelector('#replyOutput')
  const commentBox = document.querySelector('.comment-box')

  if (commentBox.value.trim().length >= 1) {
    const commentItemId = 'id' + Date.parse(new Date()).toString()
    const commentBoxValue = commentBox.value
    let commentItem = `
      <div class="comment-item" id="${commentItemId}">
        <div class="comment-content-item">
          <img src="" class="home-page-photo image" alt="photo">
          <div>
            <strong class="user-profile-name">Jane Doe</strong>
            <p class="">Hey</p>
            <div class="comment-item-options">
              <button class="comment-button"><i class="fa fa-comment-o"></i></button>
              <button><i class="fa fa-retweet"></i></button>
              <button><i class="fa fa-heart-o"></i></button>
              <button><i class="fa fa-upload"></i></button>
            </div>
          </div>
        </div>
        <button class="more-button" property=""><i class="material-icons">&#xe5d3;</i></button>
      </div>
    `
    commentItem += replyOutput.innerHTML
    replyOutput.innerHTML = commentItem

    commentBox.value = ''

    document.querySelector('.comment-modal-container').style.display = 'none'
    document.querySelector('#overlay').style.display = 'none'

    const addItemToIndexDb = {
      commentItemId: commentItemId,
      commentBoxValue: commentBoxValue
    }

    addEntryToDb('comment-data', addItemToIndexDb)
  }
}

const getCommentItemFromDb = async () => {
  const commentData = await getEntryFromDb('comment-data')
  const commentItems = commentData.reverse().map((commentItem) => {
    const { commentItemId, commentBoxValue } = commentItem
    return `
      <div class="comment-item" id="${commentItemId}">
        <div class="comment-content-item">
          <img src="" class="home-page-photo image" alt="photo">
          <div>
            <strong class="user-profile-name">Jane Doe</strong>
            <p class="">Hey</p>
            <div class="comment-item-options">
              <button class="comment-button"><i class="fa fa-comment-o"></i></button>
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

  document.querySelector('#replyOutput').innerHTML = commentItems.join('')
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

  getCommentItemFromDb()
}

export default addCommentPageEvents
