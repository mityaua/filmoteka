import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default function modalForFilm(markup) {
  Swal.fire({
    html: markup,
    showCloseButton: true,
    showConfirmButton: false,
    showClass: {
      popup: 'animate__animated animate__fadeIn',
    },
    customClass: {
      container: 'our-test-class', // Заменить на существующий внешний класс
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
}
