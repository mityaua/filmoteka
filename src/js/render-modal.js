import modalTemplate from '../templates/modal-film-detail.hbs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

// Функция отрисовки модального окна
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  NProgress.start();

  try {
    // Тестово выводит модалку

    Swal.fire({
      html: modalMarkup,
      showCloseButton: true,
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      customClass: {
        container: 'our-test-class',
        popup: '...',
        header: '...',
        title: '...',
        closeButton: '...',
        icon: '...',
        image: '...',
        content: '...',
        htmlContainer: '...',
        input: '...',
        inputLabel: '...',
        validationMessage: '...',
        actions: '...',
        confirmButton: '...',
        denyButton: '...',
        cancelButton: '...',
        loader: '...',
        footer: '....',
      },
    });
  } catch (error) {
    console.error('Smth wrong with modal window' + error);
  }

  NProgress.done();
}
