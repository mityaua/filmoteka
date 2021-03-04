import api from './api/api';
import { formRef, inputRef } from './references/refs';

import searchRender from './render-search';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

//Listener
formRef.addEventListener('submit', searchingHandler);

//Searching Function
function searchingHandler() {
  event.preventDefault();

  let inputedText = inputRef.value;

  if (inputedText.length <= 1)
    return console.log('Please, enter more specific query');

  NProgress.start();

  api.fetchmovieSearcher(inputedText).then(searchRender);

  NProgress.done();
}
