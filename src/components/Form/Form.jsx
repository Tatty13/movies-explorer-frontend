import './Form.css';

function Form({
  name,
  btnText,
  loadingText,
  formMessage,
  formMessageType = 'error',
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
      <div className='form__submit-wrap'>
        <span className={`form__mesasge form__mesasge_type_${formMessageType}`}>
          {formMessage}
        </span>
        <button
          className={`btn form__submit-btn ${
            !isEditMode && 'form__submit-btn_invisible'
          } ${isSubminBtnDisabled && 'form__submit-btn_disabled'}`}
          type='submit'
          name='submit-btn'
          disabled={isSubminBtnDisabled}>
          {isLoading ? loadingText || 'Сохранение...' : btnText || 'Сохранить'}
        </button>
      </div>
    </form>
  );
}

export { Form };
