import modalTemplate from '../templates/modal-film-detail.hbs';

// Функция отрисовки модального окна
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  console.log(modalMarkup);
}
