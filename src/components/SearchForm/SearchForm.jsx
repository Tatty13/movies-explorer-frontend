import { useState } from 'react';

import './SearchForm.css';

function SearchForm() {
  const [isFilterActive, setFilterState] = useState(true);

  const toggleFilter = () => setFilterState(!isFilterActive);

  return (
    <form
      className='search-form'
      name='search'>
      <div className='search'>
        <input
          type='text'
          placeholder='Фильм'
          className='search__input'
        />
        <button
          type='submit'
          aria-label='Искать'
          className='search-form__btn search__btn'>
          <span className='search__icon' />
        </button>
      </div>
      <div className='filter'>
        <button
          type='button'
          aria-label='Фильтровать'
          onClick={toggleFilter}
          className={`search-form__btn filter__btn ${
            !isFilterActive && 'filter__btn_inactive'
          }`}>
          <span className='filter__switch'></span>
        </button>
        <span className='filter__name'>Короткометражки</span>
      </div>
    </form>
  );
}

export { SearchForm };
