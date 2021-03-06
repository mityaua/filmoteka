import axios from 'axios';
import allGenres from '../data/genres.json';

const API_KEY = '249f222afb1002186f4d88b2b5418b55';
const TREND_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const ID_URL = 'https://api.themoviedb.org/3/movie/';

export default {
  // Фетч трендовых фильмов
  async fetchTrendingMovies() {
    const { data } = await axios.get(`${TREND_URL}?api_key=${API_KEY}`);

    const trendingMovies = data.results;

    return trendingMovies;
  },

  // Фетч полной информации о трендах
  async getFullTrendData() {
    const movies = await this.fetchTrendingMovies();
    const allGenres = await this.fetchGenres();

    const fullTrendData = this.dataCombine(movies, allGenres);

    return fullTrendData;
  },

  // Фетч по поисковому запросу
  async fetchMovieSearcher(text) {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${text}`,
    );

    const searchResults = data.results;

    const allGenres = await this.fetchGenres();
    const fullSearchData = this.dataCombine(searchResults, allGenres);

    return fullSearchData;
  },

  // Фетч фильма по его ID
  async getMovieById(id) {
    const { data } = await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);

    return data;
  },

  // Запрос и обработка локальных жанров
  async fetchGenres() {
    const { genres } = allGenres;
    return genres;
  },

  // Слияние полной информации о фильме
  async dataCombine(films, allGenres) {
    return films.map(film => ({
      ...film,
      year: film.release_date ? film.release_date.split('-')[0] : '',
      genres: film.genre_ids
        .map(id => allGenres.filter(element => element.id === id))
        .slice(0, 3)
        .flat(),
    }));
  },
};
