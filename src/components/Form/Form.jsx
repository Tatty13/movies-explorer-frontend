import './Form.css';

function Form({
  name,
  btnText,
  loadingText,
  isLoading,
  onSubmit,
  isEditMode = true,
  isFormValid,
  isSubmitForbidden = false,
  children,
}) {
  const isSubminBtnDisabled = !isFormValid || isSubmitForbidden;

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
        } ${isSubminBtnDisabled && 'form__submit-btn_disabled'}`}
        type='submit'
        name='submit-btn'
        disabled={isSubminBtnDisabled}>
        {isLoading ? loadingText || 'Сохранение...' : btnText || 'Сохранить'}
      </button>
    </form>
  );
}

export { Form };
