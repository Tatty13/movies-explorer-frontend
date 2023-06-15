import './Movies.css';
import { MoviesCardList, SearchForm, Preloader } from '../../components';

function Movies({ movies, savedMovies, isLoading, onSearch, shouldMount }) {
  async function handleSubmit(e) {
    e.preventDefault();
    await onSearch();
  }

  return (
    <div className='container container_content_movies'>
      <SearchForm onSubmit={handleSubmit} />
      {shouldMount &&
        (isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
          />
        ))}
    </div>
  );
}

export { Movies };
