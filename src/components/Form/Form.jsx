import './Form.css';

function Form({
  name,
  btnText,
  loadingText,
  isLoading,
  onSubmit,
  isEditMode = true,
  isFormValid,
  children,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={`form auth-form form_place_${name}`}
      action='#'
      name={name}
      noValidate>
      {children}
      <button
        className={`btn form__submit-btn ${
          !isEditMode && 'form__submit-btn_invisible'
        } ${!isFormValid && 'form__submit-btn_disabled'}`}
        type='submit'
        name='submit-btn'
        disabled={!isFormValid}>
        {isLoading ? loadingText || 'Сохранение...' : btnText || 'Сохранить'}
      </button>
    </form>
  );
}

export { Form };
