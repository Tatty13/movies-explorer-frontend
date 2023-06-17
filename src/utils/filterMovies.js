import { SHORT_FILM__MAX_DURATION_IN_MIN } from './movie-constants';

/**
 * @param {Array<string>} words
 * @param {string} keyWord
 * @returns
 */
const isIncludeKeyWord = (words, keyWord) =>
  words.some((word) => word.toLowerCase().includes(keyWord.toLowerCase()));

/**
 * @param {import('./types/movie').Movie[]} movies
 * @param {string} keyWord
 * @returns
 */
const filterMoviesByKeyWord = (movies, keyWord) =>
  movies.filter(({ nameRU, nameEN }) =>
    isIncludeKeyWord([nameRU, nameEN], keyWord)
  );

/**
 * @param {import('./types/movie').Movie[]} movies
 * @param {string} keyWord
 * @returns
 */
const filterShortFilmsByKeyWord = (movies, keyWord) =>
  movies.filter(
    ({ nameRU, nameEN, duration }) =>
      duration <= SHORT_FILM__MAX_DURATION_IN_MIN &&
      isIncludeKeyWord([nameRU, nameEN], keyWord)
  );

/**
 * @param {import('./types/movie').Movie[]} movies
 * @param {string} keyWord
 * @param {boolean} isOnlyShortFilm
 * @returns
 */
const filterMovies = (movies, keyWord, isOnlyShortFilm) =>
  isOnlyShortFilm
    ? filterShortFilmsByKeyWord(movies, keyWord, isOnlyShortFilm)
    : filterMoviesByKeyWord(movies, keyWord);

export { filterMovies };
