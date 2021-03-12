import movieTpl from '../../templates/film-detail.hbs';
import movieLibraryTpl from '../../templates/library-film-detail.hbs';
import { gallery } from '../references/refs';

// Функция отрисовки списка трендовых фильмов
function renderCollection(data) {
  const markup = movieTpl(data);

  gallery.insertAdjacentHTML('beforeend', markup);
}

// Функция отрисовки списка фильмов в библиотеке
function renderLibraryCollection(data) {
  const markup = movieLibraryTpl(data);

  gallery.insertAdjacentHTML('beforeend', markup);
}

export { renderCollection, renderLibraryCollection };