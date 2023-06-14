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
          className='btn search__btn hover-effect'>
          <span className='search__icon' />
        </button>
      </div>
      <div className='filter'>
        <button
          type='button'
          aria-label='Фильтровать'
          onClick={toggleFilter}
          className={`btn filter__btn hover-effect hover-effect_type_opacity-60
          ${!isFilterActive && 'filter__btn_inactive'}`}>
          <span className='filter__switch'></span>
        </button>
        <span className='filter__name'>Короткометражки</span>
      </div>
    </form>
  );
}

export { SearchForm };
