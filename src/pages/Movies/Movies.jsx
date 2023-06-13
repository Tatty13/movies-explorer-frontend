import './Movies.css';
import { MoviesCardList, SearchForm, Preloader } from '../../components';

function Movies({ movies, savedMovies }) {
  /**
   * удалить на этапе №3
   */
  const isLoading = false;

  return (
    <div className='container container_content_movies'>
      <SearchForm />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
        />
      )}
    </div>
  );
}

export { Movies };
