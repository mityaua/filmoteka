import api from './api/api-service';
import searchRender from './render/render-search';
import { dataCombine, getGenres } from './data/data-combine';
import { defineResultsPerPage, secret } from './components/pagination';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { errorModal, showEastereggs } from './components/notify';
import showConfetti from './components/confetti';

import { formRef, inputRef, headerWarning } from './references/refs';

// DOM
let btns = document.querySelectorAll('.pagination-button');
const btn1Ref = document.querySelector('[data-index="1"]');

// Listener
formRef.addEventListener('submit', searchingHandler);

// Searching function
function searchingHandler(event) {
  event.preventDefault();

  const page = 1;
  btns.forEach(el => el.classList.remove('pagination--current'));
  btn1Ref.classList.add('pagination--current');

  const inputedText = inputRef.value.replace(/\s+/g, ' ').trim();

  if (inputedText.length <= 1) {
    return (headerWarning.textContent =
      'No matches found for your query. Enter the correct movie name.');
  }

  if (inputedText === secret.r || inputedText === secret.e) {
    showConfetti();
    showEastereggs();
  }

  NProgress.start();
  headerWarning.textContent = '';
  movieSearcher(inputedText, page);
  NProgress.done();
}

// Search fetch
async function movieSearcher(searchText, pageNumber) {
  try {
    const data = await api.fetchMovieSearcher(searchText, pageNumber);

    const result = data.results;

    const allGenres = getGenres();
    const fullSearchData = dataCombine(result, allGenres);
    const size = defineResultsPerPage();

    if (result.length === 0) {
      return (headerWarning.textContent =
        'No matches found for your query. Enter the correct movie name.');
    }

    searchRender(cutItems(fullSearchData, size));
  } catch (error) {
    errorModal();
    console.error('Smth wrong with search form fetch' + error);
  }
}

function cutItems(array, number) {
  return array.slice(0, number);
}

export { movieSearcher };
