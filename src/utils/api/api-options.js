const mainApiOptions = {
  baseURL: 'https://api.allmovies.nomoredomains.rocks',
  errorMessages: {
    getUser: 'Не удалось загрузить данные пользователя',
    updateUser: 'Не удалось обновить данные пользователя',

    validateToken: 'Данные не прошли проверку',
    createUser: 'Не удалось зарегистрировать пользователя',
    login: 'Не удалось авторизовать пользователя',
    logout: 'Ошибка выхода из аккаунта',

    getMovies: 'Не удалось загрузить фильмы',
    addMovie: 'Не удалось добавить фильм',
    deleteMovie: 'Не удалось удалить фильм',
  },
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
  },
  credentialsOpt: { credentials: 'include' },
};

const moviesApiOptions = {
  baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
  errorMessages: {
    getMovies: 'Не удалось загрузить фильмы',
  },
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
  },
};

export { mainApiOptions, moviesApiOptions };
