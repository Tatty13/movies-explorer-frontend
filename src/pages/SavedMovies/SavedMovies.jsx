import { useState } from 'react';

import {
  MoviesCardList,
  Preloader,
  SearchForm,
  SectionWithMovies,
} from '../../components';

function SavedMovies({ isLoading, movies }) {
  const [isFilterActive, setFilterState] = useState(false);

  const handleFilterClick = () => {
    setFilterState(!isFilterActive);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <SectionWithMovies>
      <SearchForm
        onSubmit={handleSubmit}
        isFilterActive={isFilterActive}
        onFilterClick={handleFilterClick}
      />

      {isLoading ? (
        <Preloader />
      ) : !movies?.length ? (
        <p className='movies__not-found-text'>Ничего не найдено :(</p>
      ) : (
        <MoviesCardList movies={movies} />
      )}
    </SectionWithMovies>
  );
}

export { SavedMovies };
