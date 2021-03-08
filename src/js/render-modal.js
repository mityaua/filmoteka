import modalTemplate from '../templates/modal-film-detail.hbs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import errorModal from './components/modal-error';
import { modalBox } from './references/refs';

//Listener for closing by ESC
window.addEventListener('keydown', modalClosinByEsc);

// Функция отрисовки модального окна по шаблону
export default function renderMovieModal(data) {
  NProgress.start();

  const modalMarkup = modalTemplate(data);

  try {
    modalBox.innerHTML = modalMarkup;

    modalBox.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    const modalBackdrop = document.querySelector('.modal__backdrop');
    const closeButton = document.querySelector('[data-action="close-modal"]');

    modalBackdrop.addEventListener('click', modalClosing);
    closeButton.addEventListener('click', modalClosing);
  } catch (error) {
    errorModal();
    console.error('Smth wrong with modal window' + error);
  }

  NProgress.done();
}

//Closing functions
function modalClosing() {
  modalBox.classList.remove('is-open');
  document.body.style.overflow = '';
}

function modalClosinByEsc(event) {
  if (event.code === 'Escape') {
    modalClosing();
  }
}
