import './Preloader.css';

function Preloader({ fullscreen }) {
  return (
    <div className={`preloader ${fullscreen && 'preloader_fullscreen'}`}>
      <span className='preloader__spinner' />
    </div>
  );
}

export { Preloader };
