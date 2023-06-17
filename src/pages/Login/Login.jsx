import './Login.css';

import { AuthPage } from '../../components/';
import { useInput, useValidation } from '../../hooks';

function Login({ onSignin, isLoading }) {
  const { values: loginData, handleInputChange } = useInput({
    email: '',
    password: '',
  });

  const { errorMessages, isFormValid, isInputsValid, handleValidityChange } =
    useValidation();

  function handleChange(evt) {
    handleInputChange(evt);
    handleValidityChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSignin(loginData);
  }

  return (
    <AuthPage
      title='Рады видеть!'
      pageName='login'
      btnText='Войти'
      isLoading={isLoading}
      isFormValid={isFormValid}
      onSubmit={handleSubmit}>
      <label className='form__block form__block_mode_column'>
        <span className='form__block-name'>E-mail</span>
        <input
          className={`form__input form__input_mode_column ${
            !isInputsValid.email && 'form__input_invalid'
          }`}
          type='email'
          name='email'
          placeholder='Введите Email'
          value={loginData.email}
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
          placeholder='Введите пароль'
          value={loginData.password}
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

export { Login };
