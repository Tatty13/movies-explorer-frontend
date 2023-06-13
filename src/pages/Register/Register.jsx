import './Register.css';
import { AuthPage } from '../../components';

function Register() {
  return (
    <AuthPage
      title='Добро пожаловать!'
      pageName='register'
      btnText='Зарегистрироваться'
      children>
      <label className='form__block form__block_mode_column'>
        <span className='form__block-name'>Имя</span>
        <input
          className={`form__input form__input_mode_column`}
          type='text'
          name='name'
          placeholder='Введите имя'
          minLength='2'
          maxLength='30'
          defaultValue='Виталий'
          required
        />
      </label>
      <span className='form__input-error form__input-error_mode_column'></span>
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
          className={`form__input form__input_mode_column form__input_invalid`}
          type='password'
          name='password'
          placeholder='Введите пароль'
          defaultValue='password123456'
          required
        />
      </label>
      <span className='form__input-error form__input-error_mode_column'>
        Что-то пошло не так...
      </span>
    </AuthPage>
  );
}

export { Register };
