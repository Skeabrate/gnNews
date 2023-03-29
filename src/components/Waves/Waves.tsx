import './waves.css';
import cx from 'classnames';

const Waves = ({ isStorm }: { isStorm?: boolean }) => {
  return (
    <div className='absolute left-0 bottom-0 right-0'>
      <svg
        className={cx('relative h-28 w-full', isStorm ? 'h-28' : 'h-6')}
        viewBox='0 24 150 28'
        preserveAspectRatio='none'
        shapeRendering='auto'
      >
        <defs>
          <path
            id='wave'
            d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
          />
        </defs>
        <g className='parallax'>
          <use
            className=' opacity-1 fill-brand'
            xlinkHref='#wave'
            x='48'
            y='7'
          />
          <use
            className='fill-brand opacity-70'
            xlinkHref='#wave'
            x='48'
            y='5'
          />
          <use
            className='fill-brand opacity-50'
            xlinkHref='#wave'
            x='48'
            y='3'
          />
          <use
            className='fill-brand opacity-30'
            xlinkHref='#wave'
            x='48'
            y='0'
          />
        </g>
      </svg>
    </div>
  );
};

export default Waves;
