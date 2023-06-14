import './Login.css';

import { AuthPage } from '../../components/';

function Login() {
  return (
    <AuthPage
      title='Рады видеть!'
      pageName='login'
      btnText='Войти'
      children>
      <label className='form__block form__block_mode_column'>
        <span className='form__block-name'>E-mail</span>
        <input
          className={`form__input form__input_mode_column`}
          type='email'
          name='email'
          placeholder='Введите Email'
          defaultValue='pochta@yandex.ru'
          required
        />
      </label>
      <span className='form__input-error form__input-error_mode_column'></span>
      <label className='form__block form__block_mode_column'>
        <span className='form__block-name'>Пароль</span>
        <input
          className={`form__input form__input_mode_column`}
          type='password'
          name='password'
          placeholder='Введите пароль'
          required
        />
      </label>
      <span className='form__input-error form__input-error_mode_column'></span>
    </AuthPage>
  );
}

export { Login };
