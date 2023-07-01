import { useEffect, useState } from 'react';

import {
  MoviesCardList,
  Preloader,
  SearchForm,
  SectionWithMovies,
} from '../../components';
import { useInput } from '../../hooks';
import {
  filterMovies,
  getDataFromLS,
  saveDataInLS,
  removeDataFromLS,
} from '../../utils/helpers';
import { MOVIE_MESSAGES } from '../../utils/constants';

function SavedMovies({ movies, onDelete }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSavedMoviesFilterActive, setFilterState] = useState(false);
  const [filtredMovies, setFiltredMovies] = useState([]);

  const {
    values: searchValue,
    setValues: setSearchValue,
    handleInputChange,
  } = useInput({
    search: '',
  });

  const handleFilterClick = () => {
    setIsLoading(true);

    const filterState = !isSavedMoviesFilterActive;
    setFilterState(filterState);

    const { savedMoviesSearch } = getDataFromLS('savedMoviesSearch');
    const filtredMovies = filterMovies(
      movies,
      savedMoviesSearch || '',
      filterState
    );
    setFiltredMovies(filtredMovies);

    setIsLoading(false);
  };

  const handleSearch = () => {
    setIsLoading(true);

    const filtedMovies = filterMovies(
      movies,
      searchValue.search,
      isSavedMoviesFilterActive
    );
    setFiltredMovies(filtedMovies);

    setIsLoading(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
    saveDataInLS({
      savedMoviesSearch: searchValue.search,
    });
  }

  useEffect(() => {
    setIsLoading(true);
    setFiltredMovies(movies);
    removeDataFromLS('savedMoviesSearch');
    setIsLoading(false);
  }, [movies, setSearchValue]);

  return (
    <SectionWithMovies>
      <SearchForm
        onSubmit={handleSubmit}
        isFilterActive={isSavedMoviesFilterActive}
        onFilterClick={handleFilterClick}
        searchValue={searchValue.search}
        onChange={handleInputChange}
      />

      {isLoading ? (
        <Preloader />
      ) : !filtredMovies?.length ? (
        <p className='movies__info-text'>{MOVIE_MESSAGES.notFound}</p>
      ) : (
        <MoviesCardList
          movies={filtredMovies}
          hasDeleteBtn={true}
          onDelete={onDelete}
        />
      )}
    </SectionWithMovies>
  );
}

export { SavedMovies };
