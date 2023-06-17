import { Link } from 'react-router-dom';

import './AuthPage.css';
import { Logo, Form } from '../';

function AuthPage({
  title,
  pageName,
  btnText,
  loadingText,
  isLoading,
  isFormValid,
  onSubmit,
  children,
}) {
  return (
    <section className='container section auth'>
      <Logo />
      <h1 className='section__title auth__title'>{title}</h1>
      <Form
        title={title}
        name={pageName}
        isLoading={isLoading}
        loadingText={loadingText || 'Загрузка...'}
        btnText={btnText}
        isFormValid={isFormValid}
        onSubmit={onSubmit}>
        {children}
      </Form>
      {pageName === 'register' && (
        <p className='auth__text'>
          Уже зарегистрированы?{' '}
          <Link
            to='/signin'
            className='link auth__link hover-effect hover-effect_type_opacity-60'>
            Войти
          </Link>
        </p>
      )}
      {pageName === 'login' && (
        <p className='auth__text'>
          Ещё не зарегистрированы?{' '}
          <Link
            to='/signup'
            className='link auth__link hover-effect hover-effect_type_opacity-60'>
            Регистрация
          </Link>
        </p>
      )}
    </section>
  );
}

export { AuthPage };
