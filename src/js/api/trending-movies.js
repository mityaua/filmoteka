import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/trending/movie/week';
const API_KEY = '249f222afb1002186f4d88b2b5418b55';

async function fetchTrendingMovies() {
  const { data } = await axios.get(`${URL}?api_key=${API_KEY}`);

  const trendingMovies = data.results;

  console.log(trendingMovies);
}

fetchTrendingMovies();
 