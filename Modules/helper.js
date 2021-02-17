import CommentPage from "./commentPage/CommentPage.js"
import addCommentPageEvents from "./commentPage/events.js"
import addMainContentEvents from "./mainContent/events.js"
import MainContent from "./MainContent/MainContent.js"

const switchCurrentPage = async (page) => {
  const currentPage = document.querySelector('#currentPage')
  localStorage.setItem('currentPage', page)

  switch (page) {
    case 'homePage':
      currentPage.innerHTML = await MainContent()
      addMainContentEvents()
      break
    case 'commentPage':
      currentPage.innerHTML = CommentPage()
      addCommentPageEvents()
      break
    default:
      currentPage.innerHTML = await MainContent()
      addMainContentEvents()
      break
  }
}

export default switchCurrentPage
