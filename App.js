import modal from './Modules/modal/Modal.js';
import LeftNav from './Modules/leftNav/LeftNav.js';
import MainContent from './Modules/MainContent/MainContent.js';
import TrendingPane from './Modules/trendingPane/TrendingPane.js';
import addModalEventListeners from './Modules/modal/events.js';
import { request } from './dataStorage.js';
import { addProfileEventListeners } from './Modules/leftNav/events.js';
import { addTweetItemToDb, getTweetItemFromDb } from './Modules/MainContent/events.js';
import smallScreenEventListeners from './Modules/smallScreen/events.js';
import toggleTheme from "./theme.js";

const mainApp = async () => {
  return `
    ${await modal()}
    ${await LeftNav()}
    <section class="grid-container">
      ${await MainContent()}
      ${TrendingPane()}
    </section>
  `
}

request.onsuccess = async () => {
  document.getElementById('root').innerHTML = await mainApp();
  toggleTheme()
  addModalEventListeners();
  addProfileEventListeners();
  addTweetItemToDb();
  getTweetItemFromDb();
  smallScreenEventListeners();
}
