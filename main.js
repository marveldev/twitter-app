import modal from './Modules/modal/Modal.js';
import leftSideNav from './Modules/nav/LeftNav.js';
import mainContent from './Modules/mainContent/MainContent.js';
import rightSideNav from './Modules/nav/RightSideNav.js';
import toggleTheme from './theme/theme.js';
import navModalEventListeners from './Modules/modal/navModals.js';
import { request } from './dataStorage.js';
import { addProfileEventListeners } from './Modules/nav/events.js';
import { addTweetItemToDb, getTweetItemFromDb } from './Modules/mainContent/events.js';
import smallScreenEventListeners from './Modules/smallScreen/smalScreen.js';

const mainApp = async () => {
  return `
    ${await modal()}
    ${await leftSideNav()}
    <section class="grid-container">
      ${await mainContent()}
      ${rightSideNav()}
    </section>
  `
}

request.onsuccess = async () => {
  document.getElementById('root').innerHTML = await mainApp();
  toggleTheme();
  navModalEventListeners();
  addProfileEventListeners();
  addTweetItemToDb();
  getTweetItemFromDb();
  smallScreenEventListeners()
}
