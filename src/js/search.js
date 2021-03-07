import api from './api/api-service';
import searchRender from './render-search';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import errorModal from './components/modal-error';
import { formRef, inputRef, headerWarning } from './references/refs';

// Listener
formRef.addEventListener('submit', searchingHandler);

// Searching function
function searchingHandler(event) {
  event.preventDefault();

  // Обработка нескольких пробелов и обрезка лишних! Need to test!
  const inputedText = inputRef.value.replace(/\s+/g, ' ').trim();

  if (inputedText.length <= 1) {
    return (headerWarning.textContent =
      'No matches found for your query. Enter the correct movie name.');
  }

  NProgress.start();
  headerWarning.textContent = '';
  movieSearcher(inputedText);
  NProgress.done();
}

// Search fetch
async function movieSearcher(searchText) {
  try {
    const result = await api.fetchMovieSearcher(searchText);

    if (result.length === 0) {
      return (headerWarning.textContent =
        'No matches found for your query. Enter the correct movie name.');
    }

    searchRender(result);
  } catch (error) {
    errorModal();
    console.error('Smth wrong with outer search fetch' + error);
  }
}
