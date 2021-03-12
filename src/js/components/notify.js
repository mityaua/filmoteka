import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

// Error notify
function errorModal() {
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Service temporarily unavailable',
    confirmButtonColor: '#ff6b08',
  });
}

// Secret notify
function showEastereggs() {
  Swal.fire({
    title: 'Well, you found me!',
    text: 'Congratulations! ',
    background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
    backdrop: `
    rgba(204,108,23,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
    confirmButtonColor: '#ff6b08',
  });
}

export { errorModal, showEastereggs };
