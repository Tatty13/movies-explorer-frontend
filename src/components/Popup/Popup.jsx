import { useEffect } from 'react';

import './Popup.css';

function Popup({ name, isOpen, onClose, containerClass, children }) {
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) onClose();
  }

  useEffect(() => {
    const handleEscClose = (evt) => evt.code === 'Escape' && onClose();

    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);

      return () => {
        document.removeEventListener('keydown', handleEscClose);
      };
    }
  }, [isOpen, onClose]);

  return (
    <dialog
      className={`popup popup_content_${name} ${isOpen && 'popup_open'}`}
      onMouseDown={handleOverlayClose}>
      <div className={containerClass}>
        {children}
        <button
          className='btn popup__close-btn hover-effect hover-effect hover-effect_type_opacity-60'
          type='button'
          aria-label='Закрыть'
          onClick={onClose}></button>
      </div>
    </dialog>
  );
}

export { Popup };
