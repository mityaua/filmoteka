import axios from 'axios';
import allGenres from '../data/genres.json';

const API_KEY = '249f222afb1002186f4d88b2b5418b55';
const URL = 'https://api.themoviedb.org/3/trending/movie/week';
// const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';

export default {
  // Фетч трендовых фильмов
  async fetchTrendingMovies() {
    const { data } = await axios.get(`${URL}?api_key=${API_KEY}`);

    const trendingMovies = data.results;

    return trendingMovies;
  },

  // Фетч локальных жанров
  async fetchGenres() {
    const data = allGenres;

    const genres = data.genres;

    return genres;
  },

  // Фетч полной информации о фильме
  async getFullTrendData() {
    const movies = await this.fetchTrendingMovies();

    const allGenres = await this.fetchGenres();

    const fullData = dataCombine(movies, allGenres);

    return fullData;
  },
};

// Слияние полной информации о фильме
function dataCombine(films, allGenres) {
  return films.map(film => ({
    ...film,
    year: film.release_date.split('-')[0],
    genres: film.genre_ids
      ? film.genre_ids
          .map(id => allGenres.filter(element => element.id === id))
          .slice(0, 3)
          .flat()
      : 'Other',
  }));
}
