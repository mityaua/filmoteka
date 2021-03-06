import modalTemplate from '../templates/modal-film-detail.hbs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Функция отрисовки модального окна
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  NProgress.start();

  try {
    // Тестово выводит модалку (убрать при замене на постоянную и убрать в индекс хтмл скрипт с CDN)
    Swal.fire({
      html: modalMarkup,
      showCloseButton: true,
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
    });
  } catch (error) {
    console.error('Smth wrong with modal window' + error);
  }

  NProgress.done();
}
