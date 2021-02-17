import CommentPage from "./commentPage/CommentPage.js"
import addCommentPageEvents from "./commentPage/events.js"
import addHomePageEvents from "./homePage/events.js"
import HomePage from "./homePage/HomePage.js"

const switchCurrentPage = async (page) => {
  const currentPage = document.querySelector('#currentPage')
  localStorage.setItem('currentPage', page)

  switch (page) {
    case 'homePage':
      currentPage.innerHTML = await HomePage()
      addHomePageEvents()
      break
    case 'commentPage':
      currentPage.innerHTML = CommentPage()
      addCommentPageEvents()
      break
    default:
      currentPage.innerHTML = await HomePage()
      addHomePageEvents()
      break
  }
}

export default switchCurrentPage
