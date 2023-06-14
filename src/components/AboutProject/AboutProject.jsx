import './AboutProject.css';

function AboutProject() {
  return (
    <section
      id='about'
      className='about'>
      <div className='container container_place_about'>
        <h2 className='landing-title about__title'>О проекте</h2>
        <ul className='list two-columns'>
          <li className='two-columns__item'>
            <h3 className='two-columns__title'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='two-columns__desc'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className='two-columns__item'>
            <h3 className='two-columns__title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='two-columns__desc'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className='process'>
          <p className='process__duration process__duration_theme_brand'>
            1 неделя
          </p>
          <span className='process__name'>Back-end</span>
          <p className='process__duration process__duration_theme_normal'>
            4 недели
          </p>
          <span className='process__name'>Front-end</span>
        </div>
      </div>
    </section>
  );
}

export { AboutProject };
