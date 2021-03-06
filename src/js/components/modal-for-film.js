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
      container: '...', // Заменить на существующий внешний класс
      popup: '...',
      closeButton: '...',
      content: '...',
      htmlContainer: '...',
    },
  });
}
