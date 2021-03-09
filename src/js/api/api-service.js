import axios from 'axios';
import { currentPage } from '../pagination';
import {
  dataCombine,
  createGenresFromID,
  createYear,
  getGenres,
} from '../data/data-combine';
import { API_KEY, TREND_URL, SEARCH_URL, ID_URL } from './api-vars';

export default {
  // Фетч трендовых фильмов с полным ответом
  async fetchTrendingMovies() {
    try {
      const response = await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${currentPage}`);
      console.log(currentPage);

      return response.data;
    } catch (error) {
      console.error('Smth wrong with api trending fetch' + error);
    }
  },

  // Получение полной информации о трендах c данными для пагинации
  async getFullTrendData() {
    try {
      const data = await this.fetchTrendingMovies();

      const movies = data.results;
      
      const totalPages = data.total_pages;
      const totalResults = data.total_results;

      // console.log(movies);
      // console.log(currentPage);
      console.log(totalPages);
      // console.log(totalResults);

      const allGenres = getGenres();
      const fullTrendData = dataCombine(movies, allGenres);

      return { fullTrendData, currentPage, totalPages, totalResults };
    } catch (error) {
      console.error('Smth wrong with api get full trends' + error);
    }
  },

  // Фетч по поисковому запросу
  async fetchMovieSearcher(text) {
    try {
      const { data } = await axios.get(
        `${SEARCH_URL}?api_key=${API_KEY}&query=${text}&page=${currentPage}`);
      
      const searchResults = data.results;
      const totalPages = data.total_pages;
      const totalResults = data.total_results;

      // console.log(searchResults);
      // console.log(currentPage);
      // console.log(totalPages);
      // console.log(totalResults);

      const allGenres = getGenres();
      const fullSearchData = dataCombine(searchResults, allGenres);

      return { fullSearchData, totalPages, totalResults };
    } catch (error) {
      console.error('Smth wrong with api search fetch' + error);
    }
  },

  // Фетч фильма по его ID
  async getMovieById(id) {
    try {
      const { data } = await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);

      const result = {
        ...data,
        year: createYear(data),
        customGenres: createGenresFromID(data),
      };

      // console.log(result);

      return result;
    } catch (error) {
      console.error('Smth wrong with api ID fetch' + error);
    }
  },
};
