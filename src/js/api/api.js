import axios from 'axios';
import allGenres from '../data/genres.json';
import { API_KEY, TREND_URL, SEARCH_URL, ID_URL } from './api-vars';

export default {
  // Фетч трендовых фильмов
  async fetchTrendingMovies() {
    try {
      const { data } = await axios.get(`${TREND_URL}?api_key=${API_KEY}`);

      const trendingMovies = data.results;

      return trendingMovies;
    } catch (error) {
      console.error('Smth wrong with api trending fetch' + error);
    }
  },

  // Фетч полной информации о трендах
  async getFullTrendData() {
    try {
      const movies = await this.fetchTrendingMovies();
      const allGenres = this.fetchGenres();

      const fullTrendData = this.dataCombine(movies, allGenres);

      return fullTrendData;
    } catch (error) {
      console.error('Smth wrong with api full trend fetch' + error);
    }
  },

  // Фетч по поисковому запросу
  async fetchMovieSearcher(text) {
    try {
      const { data } = await axios.get(
        `${SEARCH_URL}?api_key=${API_KEY}&query=${text}`,
      );

      const searchResults = data.results;

      const allGenres = this.fetchGenres();
      const fullSearchData = this.dataCombine(searchResults, allGenres);

      return fullSearchData;
    } catch (error) {
      console.error('Smth wrong with api search fetch' + error);
    }
  },

  // Фетч фильма по его ID
  async getMovieById(id) {
    try {
      const { data } = await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);

      return data;
    } catch (error) {
      console.error('Smth wrong with api ID fetch' + error);
    }
  },

  // Запрос и обработка локальных жанров
  fetchGenres() {
    const { genres } = allGenres;
    return genres;
  },

  // Слияние полной информации о фильме
  dataCombine(films, allGenres) {
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
