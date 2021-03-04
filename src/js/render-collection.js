import сollectionItemTpl from '../templates/collection-item.hbs';

// Функция отрисовки списка фильмов
function renderCollection(data) {
  const gallery = document.querySelector('.collection');

  const markup = сollectionItemTpl(data);

  gallery.insertAdjacentHTML('beforeend', markup);
}

export default renderCollection;
