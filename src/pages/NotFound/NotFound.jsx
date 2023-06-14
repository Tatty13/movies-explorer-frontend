import { useNavigate } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className='container container_place_not-found not-found'>
      <span className='not-found__accent'>404</span>
      <h1 className='not-found__title'>Страница не найдена</h1>
      <button
        onClick={goBack}
        className='btn not-found__btn hover-effect hover-effect_type_opacity-60'>
        Назад
      </button>
    </section>
  );
}

export { NotFound };
