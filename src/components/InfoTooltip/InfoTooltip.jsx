import './InfoTooltip.css'
import { Popup } from '../';

function InfoTooltip({ isOpen, isSuccess = false, info, onClose }) {
  const content = isSuccess ? 'success' : 'error';

  const title = isSuccess ? '' : 'Кажется, что-то пошло не так...';

  return (
    <Popup
      name='notification'
      isOpen={isOpen}
      onClose={onClose}
      containerClass={`popup__container infotooltip infotooltip_content_${content}`}>
      <h2 className='popup__title infotooltip__title'>{title}</h2>
      <p className='infotooltip__subtitle'>{info}</p>
    </Popup>
  );
}

export { InfoTooltip };
