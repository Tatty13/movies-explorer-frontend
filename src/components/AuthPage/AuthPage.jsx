import { Link } from 'react-router-dom';

import './AuthPage.css';
import { Logo, Form } from '../';

function AuthPage({ title, pageName, btnText, children }) {
  return (
    <section className='container section auth'>
      <Logo />
      <h1 className='section__title auth__title'>{title}</h1>
      <Form
        title={title}
        name={pageName}
        btnText={btnText}>
        {children}
      </Form>
      {pageName === 'register' && (
        <p className='auth__text'>
          Уже зарегистрированы?{' '}
          <Link
            to='/signin'
            className='link link_theme_brand-secondary auth__link'>
            Войти
          </Link>
        </p>
      )}
      {pageName === 'login' && (
        <p className='auth__text'>
          Ещё не зарегистрированы?{' '}
          <Link
            to='/signup'
            className='link link_theme_brand-secondary auth__link'>
            Регистрация
          </Link>
        </p>
      )}
    </section>
  );
}

export { AuthPage };
