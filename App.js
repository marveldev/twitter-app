import LeftNav from './Modules/leftNav/LeftNav.js'
import TrendingPane from './Modules/trendingPane/TrendingPane.js'
import { request } from './dataStorage.js'
import addLeftNavEventListeners from './Modules/leftNav/events.js'
import addTrendingPaneEvents from './Modules/trendingPane/events.js'
import switchCurrentPage from './Modules/helper.js'

const App = async () => {
  return `
    <div id="overlay"></div>
    ${await LeftNav()}
    <section class="grid-container">
      <div id="currentPage">
      </div>
      ${TrendingPane()}
    </section>
  `
}

request.onsuccess = async () => {
  document.getElementById('root').innerHTML = await App()
  const currentPage = localStorage.getItem('currentPage')
  switchCurrentPage(currentPage)

  addLeftNavEventListeners()
  addTrendingPaneEvents()
}
