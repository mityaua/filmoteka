import api from './api/api';
import renderMovieModal from './render-modal';
import errorModal from './components/modal-error';
import { gallery } from './references/refs';

gallery.addEventListener('click', clickOnMovieHandler);

// Click Handler Function
function clickOnMovieHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
    return;
  }

  let movieId = e.target.dataset.id;

  fetchById(movieId);
}

// Outer fetch by ID
async function fetchById(id) {
  try {
    const movieId = await api.getMovieById(id);

    renderMovieModal(movieId);
  } catch (error) {
    errorModal();
    console.error('Smth wrong with outer fetch by ID' + error);
  }
}
