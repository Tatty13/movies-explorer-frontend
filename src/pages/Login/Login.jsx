import './Login.css';

import { AuthPage, FormBlockWithInput } from '../../components/';
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
      <FormBlockWithInput
        mode='column'
        blockName='E-mail'
        errorMessage={errorMessages.email}
        type='email'
        name='email'
        placeholder='Введите Email'
        value={loginData.email}
        onChange={handleChange}
        isValid={isInputsValid.email}
        required
      />
      <FormBlockWithInput
        mode='column'
        blockName='Пароль'
        errorMessage={errorMessages.password}
        type='password'
        name='password'
        placeholder='Введите пароль'
        value={loginData.password}
        onChange={handleChange}
        isValid={isInputsValid.password}
        required
      />
    </AuthPage>
  );
}

export { Login };
