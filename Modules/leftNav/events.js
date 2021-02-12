import { addEntryToDb, clearAllEntries } from '../../dataStorage.js'

const addLeftNavEventListeners = () => {
  document.querySelector('#dropdownButton').addEventListener('click', () => {
    document.querySelector('.dropdown-content').style.display = 'block'
    document.querySelector('#overlay').style.display = 'block'
    // document.querySelector('.left-nav').style.position = ''
  })

  document.querySelector('#themeButton').addEventListener('click', () => {
    document.querySelector('.theme-modal').style.display = 'block'
    document.querySelector('.dropdown-content').style.display = 'none'
  })

  document.querySelector('#editProfileButton').addEventListener('click', () => {
    document.querySelector('.edit-profile-modal').style.display = 'block'
    document.querySelector('.dropdown-content').style.display = 'none'
  })

  document.querySelector('#tweetModalButton').addEventListener('click', () => {
    document.querySelector('.tweet-modal-container').style.display = 'block'
    document.querySelector('#overlay').style.display = 'block'
  })

  const photoInput = document.querySelector('#profilePhoto')
  const profilePhoto = document.querySelector('#photo')
  photoInput.addEventListener('change', () => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(photoInput.files[0])
    photoReader.addEventListener('load', () => {
      profilePhoto.src = photoReader.result
    })
  })

  const profileForm = document.querySelector('.bio-form')
  profileForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const profileName = document.querySelector('#profileInput').value
    const photoSource = profilePhoto.src
  
    // const profilePhotos = document.querySelectorAll('.image')
    // for (let index = 0 index < profilePhotos.length index++) {
    //   const profilePhoto = profilePhotos[index]
    //   profilePhoto.src = photoSource
    // }
  
    // const names = document.querySelectorAll('.profile-name')
    // for (let index = 0 index < names.length index++) {
    //   const name = names[index]
    //   name.innerText = profileName
    // }

    document.querySelector('.edit-profile-modal').style.display = 'none'
    document.querySelector('#tweet-modal-overlay').style.display = 'none'

    clearAllEntries('profile')
    addEntryToDb('profile', { profileName, photoSource })
  })
}

export default addLeftNavEventListeners
