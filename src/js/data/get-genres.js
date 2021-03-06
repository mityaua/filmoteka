import allGenres from '../data/genres.json';

  // Обработка локальных жанров
 export default function getGenres() {
    const { genres } = allGenres;
    return genres;
  }