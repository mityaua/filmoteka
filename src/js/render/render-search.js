import movieTpl from '../../templates/film-detail.hbs';
import { gallery } from '../references/refs';

// Функция для отрисовки результатов поиска
export default function searchRender(movies) {
  const markup = movieTpl(movies);

  gallery.innerHTML = '';

  gallery.insertAdjacentHTML('beforeend', markup);
}
