import { MoviesCardList, SearchForm } from '../../components';

import './Movies.css';

function Movies({ movies, savedMovies }) {
  return (
    <div className='container container_content_movies'>
      <SearchForm />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
      />
    </div>
  );
}

export { Movies };
