import './SearchForm.css';

function SearchForm({
  isFilterActive,
  onFilterClick,
  onSubmit,
  searchValue,
  onChange,
}) {
  return (
    <form
      className='form search-form'
      name='search'
      onSubmit={onSubmit}>
      <div className='search'>
        <input
          name='search'
          type='text'
          placeholder='Фильм'
          className='search__input'
          value={searchValue}
          onChange={onChange}
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
          onClick={onFilterClick}
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
