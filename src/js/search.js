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
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const leftArrowRef = document.querySelector('.arrow-left');
const prevDotsRef = document.querySelector('#previous');
const firstPageRef = document.querySelector('.first-button');

// Listener
formRef.addEventListener('submit', searchingHandler);

// Searching function
function searchingHandler(event) {
  event.preventDefault();

  const page = 1;

  btns.forEach(el => el.classList.remove('pagination--current'));
  btn1Ref.textContent = 1;
  btn2Ref.textContent = 2;
  btn3Ref.textContent = 3;
  btn4Ref.textContent = 4;
  btn5Ref.textContent = 5;
  btn1Ref.classList.add('pagination--current');
  leftArrowRef.hidden = true;
  prevDotsRef.hidden = true;
  firstPageRef.hidden = true;

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
