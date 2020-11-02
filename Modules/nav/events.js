import { addEntryToDb } from '../../dataStorage.js';

const addProfileEventListeners = () => {
  const photoInput = document.querySelector('#profilePhoto');
  const profilePhoto = document.querySelector('#photo');
  photoInput.addEventListener('change', () => {
    const photoReader = new FileReader();
    photoReader.readAsDataURL(photoInput.files[0])
    photoReader.addEventListener('load', () => {
      profilePhoto.src = photoReader.result;
    })
  })

  const profileForm = document.querySelector('.bio-form');
  profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const profileName = document.querySelector('#profileInput').value;
    const photoSource = profilePhoto.src
    // document.querySelector('.edit-profile-modal').style.display = 'none';
    // document.querySelector('#dropdown-overlay').style.display = 'none';
    
    // const profilePhotos = document.querySelectorAll('.profile-photo')
    // for (let index = 0; index < profilePhotos.length; index++) {
    //   const profilePhoto = profilePhotos[index];
    //   profilePhoto.src = photoSource
    // }
    
    // const userNames = document.querySelectorAll('.user-name')
    // for (let index = 0; index < userNames.length; index++) {
    //   const userName = userNames[index];
    //   userName.innerText = profileName;  
    // }

    // clearAllEntries('profile');
    addEntryToDb('profile', { profileName, photoSource })
  })
}

export { addProfileEventListeners }
