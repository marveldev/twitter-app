import LeftNav from './Modules/leftNav/LeftNav.js'
import MainContent from './Modules/MainContent/MainContent.js'
import TrendingPane from './Modules/trendingPane/TrendingPane.js'
import { request } from './dataStorage.js'
import addLeftNavEventListeners from './Modules/leftNav/events.js'
import addMainContentEvents from './Modules/MainContent/events.js'
import smallScreenEventListeners from './Modules/smallScreen/events.js'
import addTrendingPaneEvents from './Modules/trendingPane/events.js'

const App = async () => {
  return `
    <div id="overlay"></div>
    ${await LeftNav()}
    <section class="grid-container">
      ${await MainContent()}
      ${TrendingPane()}
    </section>
  `
}

request.onsuccess = async () => {
  document.getElementById('root').innerHTML = await App()
  addLeftNavEventListeners()
  addMainContentEvents()
  addTrendingPaneEvents()

  // toggleTheme()
  // addModalEventListeners()
  // addTweetItemToDb()
  // getTweetItemFromDb()
  // smallScreenEventListeners()
}
