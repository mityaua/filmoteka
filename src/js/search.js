import api from './api/api-service';
import searchRender from './render-search';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { errorModal, showEastereggs } from './components/notify';
import showConfetti from './components/confetti';
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

  if (inputedText === 'goit' || inputedText === 'go it') {
      showConfetti();
      showEastereggs();
    }

  NProgress.start();
  headerWarning.textContent = '';
  movieSearcher(inputedText);
  NProgress.done();
}

// Search fetch
async function movieSearcher(searchText) {
  try {
    const data = await api.fetchMovieSearcher(searchText);

    const result = data.fullSearchData;
    const totalPages = data.totalPages;


    if (result.length === 0) {
      return (headerWarning.textContent =
        'No matches found for your query. Enter the correct movie name.');
    }

    searchRender(result);
  } catch (error) {
    errorModal();
    console.error('Smth wrong with search form fetch' + error);
  }
}

export { movieSearcher }
