import './Form.css';

function Form({ name, btnText, onSubmit, isEditMode = true, children }) {
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
        }`}
        type='submit'
        name='submit-btn'>
        {btnText || 'Сохранить'}
      </button>
    </form>
  );
}

export { Form };
