import modal from './Modules/modal/Modal.js';
import leftSideNav from './Modules/nav/LeftNav.js';
import mainContent from './Modules/mainContent/MainContent.js';
import rightSideNav from './Modules/nav/RightSideNav.js';
import toggleTheme from './theme/theme.js';
import navModalEventListeners from './Modules/modal/navModals.js';
import { request } from './dataStorage.js';
import { addProfileEventListeners } from './Modules/nav/events.js';
import addTweetEventListeners from './Modules/mainContent/events.js';
// import smallScreenEventListeners from './Modules/smallScreen/smalScreen.js';

const mainApp = () => {
  return `
    ${modal()}
    ${leftSideNav()}
    <section class="grid-container">
      ${mainContent()}
      ${rightSideNav()}
    </section>
  `
}

request.onsuccess = () => {
  document.getElementById('root').innerHTML = mainApp();
  toggleTheme();
  navModalEventListeners();
  addProfileEventListeners();
  addTweetEventListeners();
}
