import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default function errorModal() {
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Service temporarily unavailable',
    confirmButtonColor: '#ff6b08',
  });
}
