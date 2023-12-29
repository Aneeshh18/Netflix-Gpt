import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className='w-52 px-2 transition-transform transform hover:-translate-y-1 hover:scale-110 duration-300'>
      <img
        alt='poster'
        src={IMG_CDN_URL + posterPath}
        className='w-full h-auto rounded-md shadow-md hover:shadow-lg'
      />
    </div>
  );
};

export default MovieCard;
