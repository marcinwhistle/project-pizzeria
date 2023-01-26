import { templates, select } from '../settings';
import utils from '../utils.js';

class Home {
  constructor() {
    const thisHome = this;

    thisHome.render();
  }
  render() {
    const thisHome = this;

    /* generate HTML based on template */
    const generatedHTML = templates.homepage;
    /* create element using utils.createElementFromHTML */
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const homepageContainer = document.querySelector(
      select.containerOf.homepage
    );
    /* add element to menu */
    homepageContainer.appendChild(thisHome.element);
  }
}

//event listener getAttribute
export default Home;
