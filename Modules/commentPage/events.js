import MainContent from "../MainContent/MainContent.js";

const addCommentPageEvents = async () => {
  document.querySelector('#returnButton').addEventListener('click', () => {
    document.querySelector('#currentPage').innerHTML = MainContent()
    localStorage.setItem('mainpage', 'mainContent')
  })
}

export default addCommentPageEvents
