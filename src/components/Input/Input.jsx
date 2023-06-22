import './Input.css';

function Input({ mode, type, name, placeholder, isValid, ...restProps }) {
  return (
    <input
      className={`form__input form__input_mode_${mode} ${
        isValid === false && 'form__input_invalid'
      }`}
      type={type || 'text'}
      name={name || ''}
      placeholder={placeholder || 'Заполните поле'}
      {...restProps}
    />
  );
}

export { Input };
