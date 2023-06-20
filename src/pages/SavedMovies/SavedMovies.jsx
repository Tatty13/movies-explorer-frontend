import { useEffect, useState } from 'react';

import {
  MoviesCardList,
  Preloader,
  SearchForm,
  SectionWithMovies,
} from '../../components';
import { useInput } from '../../hooks';
import { filterMovies, getDataFromLS, saveDataInLS } from '../../utils/helpers';
import { MOVIE_MESSAGES } from '../../utils/constants';

function SavedMovies({ movies }) {
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
    saveDataInLS({ isSavedMoviesFilterActive: filterState });

    const { savedMoviesSearch } = getDataFromLS('savedMoviesSearch');
    const filtredMovies = filterMovies(movies, savedMoviesSearch, filterState);
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
      isSavedMoviesFilterActive,
      savedMoviesSearch: searchValue.search,
    });
  }

  useEffect(() => {
    setIsLoading(true);

    const { isSavedMoviesFilterActive, savedMoviesSearch } = getDataFromLS(
      'isSavedMoviesFilterActive',
      'savedMoviesSearch'
    );

    if (!savedMoviesSearch) saveDataInLS({ savedMoviesSearch: '' });

    const booleanFilter = isSavedMoviesFilterActive === 'true';
    const search = savedMoviesSearch || '';
    setFilterState(booleanFilter);
    setSearchValue({ search });

    const filtredMovies = filterMovies(movies, search, booleanFilter);
    setFiltredMovies(filtredMovies);

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
        <MoviesCardList movies={filtredMovies} />
      )}
    </SectionWithMovies>
  );
}

export { SavedMovies };
