import modalTemplate from '../templates/modal-film-detail.hbs';
import modalComponent from './components/modal-for-film';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Функция отрисовки модального окна по шаблону
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  NProgress.start();

  try {
<<<<<<< HEAD
    // Тестово выводит модалку

    Swal.fire({
      html: modalMarkup,
      showCloseButton: true,
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      customClass: {
        container: 'modal__container',
        popup: '...',
        header: '...',
        title: '',
        closeButton: '...',
        icon: '...',
        image: 'image',
        content: '...',
        htmlContainer: 'modal__container',
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
=======
    // Выводит модалку
    modalComponent(modalMarkup);
>>>>>>> dev
  } catch (error) {
    console.error('Smth wrong with modal window' + error);
  }

  NProgress.done();
}
