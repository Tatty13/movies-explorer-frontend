import { HashLink } from 'react-router-hash-link';

import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='container container_place_promo'>
        <h1 className='promo__title'>
          Учебный проект студента факультета{' '}
          <span className='promo__nospace'>Веб-разработки.</span>
        </h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <HashLink
          smooth
          to='/#about'
          className='link promo__link'>
          Узнать больше
        </HashLink>
      </div>
    </section>
  );
}

export { Promo };
