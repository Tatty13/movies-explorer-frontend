import './MoreBtn.css';

function MoreBtn({ onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='btn more-btn hover-effect'>
      Ещё
    </button>
  );
}

export { MoreBtn };
