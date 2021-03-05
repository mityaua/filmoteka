import сollectionItemTpl from '../templates/collection-item.hbs';
import {gallery} from './references/refs'

// Функция отрисовки списка фильмов
function renderCollection(data) {
  const markup = сollectionItemTpl(data);

  gallery.insertAdjacentHTML('beforeend', markup);
}

export default renderCollection;
