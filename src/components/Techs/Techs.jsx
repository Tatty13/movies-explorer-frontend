import { useState } from 'react';

import './Techs.css';
import {
  TECHS,
  X_MARGIN_TOOLTIP,
  Y_MARGIN_TOOLTIP,
  TOOLTIP_WIDTH,
} from '../../utils/constants';

function Techs() {
  const [tooltip, setTooltip] = useState('');

  function handleHover(e, text) {
    const maxWidth = document.documentElement.clientWidth;
    const techTopPos = e.target.offsetTop;

    const left =
      e.target.offsetLeft + e.target.offsetWidth / 2 - TOOLTIP_WIDTH / 2;
    const maxLeftPos = left + TOOLTIP_WIDTH + X_MARGIN_TOOLTIP;
    const xPos =
      left < X_MARGIN_TOOLTIP
        ? X_MARGIN_TOOLTIP
        : maxLeftPos > maxWidth
        ? left - (maxLeftPos % maxWidth)
        : left;

    const top = techTopPos + e.target.offsetHeight + Y_MARGIN_TOOLTIP;
    const bottom =
      e.target.offsetParent.clientHeight - techTopPos + Y_MARGIN_TOOLTIP;

    const yPos =
      e.clientY < 160 ? { top: `${top}px` } : { bottom: `${bottom}px` };

    setTooltip(
      <p
        className='techs__tooltip-text'
        style={{
          ...yPos,
          left: `${xPos}px`,
        }}>
        {text}
      </p>
    );
  }

  function removeTooltip() {
    setTooltip('');
  }

  const techsList = TECHS.map(({ title, desc }, i) => (
    <li
      key={i + title}
      className='techs__item'
      onMouseEnter={(e) => handleHover(e, desc)}
      onMouseLeave={removeTooltip}>
      {title}
    </li>
  ));

  return (
    <section className='techs'>
      <div className='container container_place_techs'>
        <h2 className='landing-title techs__title'>Технологии</h2>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__desc'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='list techs__list'>{techsList}</ul>
      </div>
      <div className='techs__tooltip'>{tooltip}</div>
    </section>
  );
}
export { Techs };
