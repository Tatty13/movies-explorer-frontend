import './Register.css';
import { AuthPage } from '../../components';
import { useInput, useValidation } from '../../hooks';

function Register({ onSignup, isLoading }) {
  const { values: singupData, handleInputChange } = useInput({
    email: '',
    password: '',
    name: '',
  });

  const { errorMessages, isFormValid, isInputsValid, handleValidityChange } =
    useValidation();

  function handleChange(evt) {
    handleInputChange(evt);
    handleValidityChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSignup(singupData);
  }
  return (
    <AuthPage
      title='Добро пожаловать!'
      pageName='register'
      btnText='Зарегистрироваться'
      isLoading={isLoading}
      isFormValid={isFormValid}
      onSubmit={handleSubmit}>
      <label className='form__block form__block_mode_column'>
        <span className='form__block-name'>Имя</span>
        <input
          className={`form__input form__input_mode_column ${
            !isInputsValid.name && 'form__input_invalid'
          }`}
          type='text'
          name='name'
          placeholder='Введите имя'
          minLength='2'
          maxLength='30'
          value={singupData.name}
          onChange={handleChange}
          required
        />
      </label>
      <span className='form__input-error form__input-error_mode_column'>
        {errorMessages.name}
      </span>
      <label className='form__block form__block_mode_column'>
        <span className='form__block-name'>E-mail</span>
        <input
          className={`form__input form__input_mode_column ${
            !isInputsValid.email && 'form__input_invalid'
          }`}
          type='email'
          name='email'
          placeholder='Введите Email'
          value={singupData.email}
          onChange={handleChange}
          required
        />
      </label>
      <span className='form__input-error form__input-error_mode_column'>
        {errorMessages.email}
      </span>
      <label className='form__block form__block_mode_column'>
        <span className='form__block-name'>Пароль</span>
        <input
          className={`form__input form__input_mode_column ${
            !isInputsValid.password && 'form__input_invalid'
          }`}
          type='password'
          name='password'
          minLength={6}
          placeholder='Введите пароль'
          value={singupData.password}
          onChange={handleChange}
          required
        />
      </label>
      <span className='form__input-error form__input-error_mode_column'>
        {errorMessages.password}
      </span>
    </AuthPage>
  );
}

export { Register };
