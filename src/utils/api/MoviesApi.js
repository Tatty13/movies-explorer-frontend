import Api from './Api';
import { moviesApiOptions } from './api-options';

class MoviesApi extends Api {
  /**
   * @param {object} options
   * @param {string} options.baseURL
   * @param {object} options.errorMessages
   * @param {object} options.headers
   */
  constructor({ baseURL, errorMessages, headers }) {
    super({ baseURL, errorMessages });
    this._headers = headers;
  }

  getMovies() {
    return super.request('/', { headers: this._headers }, 'getMovies');
  }
}

const moviesApi = new MoviesApi(moviesApiOptions);

export { moviesApi };
