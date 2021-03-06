import movieTpl from '../templates/film-detail.hbs';
import { gallery } from './references/refs';

// Функция отрисовки списка фильмов
export default function renderCollection(data) {
  const markup = movieTpl(data);

  gallery.insertAdjacentHTML('beforeend', markup);
}
