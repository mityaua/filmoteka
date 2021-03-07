import axios from 'axios';
import getGenres from '../data/get-genres';
import { dataCombine } from '../data/data-combine';
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
      const allGenres = getGenres();

      const fullTrendData = dataCombine(movies, allGenres);

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

      const allGenres = getGenres();
      const fullSearchData = dataCombine(searchResults, allGenres);

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
};
