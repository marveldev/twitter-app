import { addEntryToDb, clearAllEntries } from '../../dataStorage.js'

const toggleTheme = () => {
  const root = document.querySelector('#root')
  const dimButton = document.querySelector('#dimButton')
  const defaultButton = document.querySelector('#defaultButton')
  const lightsOutButton = document.querySelector('#lightOutButton')

  root.className = localStorage.getItem('theme')
  document.querySelector('body').style.backgroundColor = localStorage.getItem('background-color')

  defaultButton.addEventListener('click', () => {
    root.className = 'default'
    document.querySelector('body').style.backgroundColor = '#fff'
    localStorage.setItem('theme', 'default')
    localStorage.setItem('background-color', '#fff')
  })

  dimButton.addEventListener('click', () => {
    root.className = 'dim'
    document.querySelector('body').style.backgroundColor = '#15202B'
    localStorage.setItem('theme', 'dim')
    localStorage.setItem('background-color', '#15202b')
  })

  lightsOutButton.addEventListener('click', () => {
    root.className = 'lights-out'
    document.querySelector('body').style.backgroundColor = '#000'
    localStorage.setItem('theme', 'lights-out')
    localStorage.setItem('background-color', '#000')
  })
}

const addLeftNavEventListeners = () => {
  function displayModal(button, selector, value) {
    document.querySelector(button).addEventListener('click', () => {
      document.querySelector(selector).style.display = value
      document.querySelector('#overlay').style.display = value
    })
  }

  displayModal('#tweetModalButton', '.tweet-modal-container', 'block')
  displayModal('#closeTweetButton', '.tweet-modal-container', 'none')
  displayModal('#dropdownButton', '.dropdown-content', 'block')
  displayModal('#closeProfileButton', '.edit-profile-modal', 'none')

  document.querySelector('#themeButton').addEventListener('click', () => {
    document.querySelector('.theme-modal').style.display = 'block'
    document.querySelector('.dropdown-content').style.display = 'none'
  })

  document.querySelector('#editProfileButton').addEventListener('click', () => {
    document.querySelector('.edit-profile-modal').style.display = 'block'
    document.querySelector('.dropdown-content').style.display = 'none'
  })

  document.querySelector('#overlay').addEventListener('click', () => {
    document.querySelector('.edit-profile-modal').style.display = 'none'
    document.querySelector('#overlay').style.display = 'none'
    document.querySelector('.theme-modal').style.display = 'none'
    document.querySelector('.tweet-modal-container').style.display = 'none'
    document.querySelector('.dropdown-content').style.display = 'none'
  })

  const photoInput = document.querySelector('#profilePhoto')
  const photo = document.querySelector('#photo')
  photoInput.addEventListener('change', () => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(photoInput.files[0])
    photoReader.addEventListener('load', () => {
      photo.src = photoReader.result
    })
  })

  document.querySelector('#saveProfileButton').addEventListener('click', () => {
    const photoSource = photo.src
    const userName = document.querySelector('#nameInput').value
    const profilePhotos = document.querySelectorAll('.image')
    profilePhotos.forEach(profilePhoto => {
      profilePhoto.src = photoSource
    })

    const profileNames = document.querySelectorAll('.profile-name')
    profileNames.forEach(profileName => {
      profileName.innerText = userName
    })

    document.querySelector('.edit-profile-modal').style.display = 'none'
    document.querySelector('#overlay').style.display = 'none'
    clearAllEntries('userData')
    addEntryToDb('userData', { userName, photoSource })
  })

  toggleTheme()
}

export default addLeftNavEventListeners
