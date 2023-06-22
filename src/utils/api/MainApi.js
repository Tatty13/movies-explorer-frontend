import Api from './Api';
import { mainApiOptions } from './api-options';

class MainApi extends Api {
  /**
   * @param {object} options
   * @param {string} options.baseURL
   * @param {object} options.errorMessages
   * @param {object} options.headers
   * @param {object} options.credentialsOpt - option for cookie
   */
  constructor({ baseURL, errorMessages, headers, credentialsOpt }) {
    super({ baseURL, errorMessages });
    this._headers = headers;
    this._credentialsOpt = credentialsOpt;

    this._reqOpt = {
      headers: this._headers,
      ...this._credentialsOpt,
    };
  }

  getUser() {
    return super.request('/users/me', this._reqOpt, 'getUser');
  }

  /**
   * @param {import('../types/user').User} userData
   */
  updateUser(userData) {
    return super.request(
      '/users/me',
      {
        method: 'PATCH',
        body: JSON.stringify(userData),
        ...this._reqOpt,
      },
      'updateUser'
    );
  }

  validateToken() {
    return this.getUserData();
  }

  /**
   * @param {import('../types/user').SignupData} signupData
   */
  createUser(signupData) {
    return super.request(
      '/signup',
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(signupData),
      },
      'createUser'
    );
  }

  /**
   * @param {import('../types/user').LoginData} loginData
   */
  login(loginData) {
    return super.request(
      '/signin',
      {
        method: 'POST',
        body: JSON.stringify(loginData),
        ...this._reqOpt,
      },
      'login'
    );
  }

  logout() {
    return super.request(
      '/signout',
      { method: 'POST', ...this._reqOpt },
      'logout'
    );
  }

  getMovies() {
    return super.request('/movies', this._reqOpt, 'getMovies');
  }

  /**
   * @param {import('../types/movie').MovieDataToSave} movieData
   * image, trailerLink, thumbnail - should be url;
   * duration is time in minutes; movieId is id from beatfilm
   */
  addMovie(movieData) {
    return super.request(
      '/movies/',
      { method: 'POST', body: JSON.stringify(movieData), ...this._reqOpt },
      'addMovie'
    );
  }

  /**
   * @param {string} movieId
   */
  deleteMovie(movieId) {
    return super.request(
      `/movies/${movieId}`,
      { method: 'DELETE', ...this._reqOpt },
      'deleteMovie'
    );
  }
}
const mainApi = new MainApi(mainApiOptions);

export { mainApi };
