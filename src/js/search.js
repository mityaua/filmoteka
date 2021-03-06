import api from './api/api';
import { formRef, inputRef } from './references/refs';
import searchRender from './render-search';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

//Listener
formRef.addEventListener('submit', searchingHandler);

//Searching function
function searchingHandler(event) {
  event.preventDefault();

  const inputedText = inputRef.value;

  if (inputedText.length <= 1) { // Нужна обработка нескольких пробелов!
    console.log('Please, enter more specific query');
    return;
  }

  NProgress.start();
  movieSearcher(inputedText.trim());
  NProgress.done();
}

// Outer search fetch
async function movieSearcher(searchText) {
  try {
    const result = await api.fetchmovieSearcher(searchText);
    searchRender(result);
  } catch (error) {
    console.error('Smth wrong with outer search fetch' + error);
  }
}
