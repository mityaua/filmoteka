// ===== Movies Searching Handler

// Refs
const searchingEl = document.getElementById('search-form');
const inputEl = searchingEl.querySelector('.search__input');

//Listener
searchingEl.addEventListener('submit', searchingHandler);

//Searching Function
function searchingHandler() {
  event.preventDefault();

  let inputedText = inputEl.value;

  if (inputedText.length <= 0)
    return console.log('Please, enter more specific query');

  movieSearcher(inputedText).then(render);
}

//Function for fetch
async function movieSearcher(text) {
  const baseUrl = 'https://api.themoviedb.org/3/';
  const endpoint = 'search/movie';
  const apiKey = '249f222afb1002186f4d88b2b5418b55';

  const query = `${baseUrl}${endpoint}?api_key=${apiKey}&query=${text}`;

  const res = await fetch(query);
  const { results } = await res.json();
  return results;
}

//Function for Render
function render(movies) {
  console.log(movies);

  movies.map(movie => console.log(movie.genre_ids));
}
