import сollectionItemTpl from '../templates/collection-item.hbs';
import { gallery } from './references/refs';

//Function for search render
function searchRender(movies) {
  const markup = сollectionItemTpl(movies);

  gallery.innerHTML = '';

  gallery.insertAdjacentHTML('beforeend', markup);
}

export default searchRender;