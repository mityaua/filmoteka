import axios from 'axios';
import modalTemplate from '../templates/modal-film-detail.hbs';

// ===== Get movie Info by Click =====

//Refs
const collectionBox = document.querySelector('.collection');

// BaseUrl
const url = 'https://api.themoviedb.org/3/movie/';
const apiKey = '249f222afb1002186f4d88b2b5418b55';

//Listener
collectionBox.addEventListener('click', clickOnMovieHandler);

//Functions
//Click Handler Function
function clickOnMovieHandler() {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG' && event.target.nodeName !== 'H2') return;
  else {
    let movieId = event.target.dataset.id;
    getMovieData(movieId).then(renderMovieModal);
  }
}

//Fetch Function
async function getMovieData(movieId) {
  const { data } = await axios.get(`${url}${movieId}?api_key=${apiKey}`);

  console.log(data);
  return data;
}

//Rendering Function
function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  console.log(modalMarkup);
}
