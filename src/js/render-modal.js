import modalTemplate from '../templates/modal-film-detail.hbs';

// Функция отрисовки модального окна
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  // Тестово выводит модалку (убрать при замене на постоянную и убрать в индекс хтмл скрипт с CDN)
  Swal.fire({
    html: modalMarkup,
    showCloseButton: true,
    showConfirmButton: false,
  });

  console.log(modalMarkup);
}