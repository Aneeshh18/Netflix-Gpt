import React, { useEffect } from 'react';
import Header from './Header'; 
import { API_OPTIONS } from '../utils/constant';
const Browse = () => {

  const getNowPlaying = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
  };

  useEffect(() => {
    getNowPlaying();
  },[])

  return (
    <><Header />
      {/* <div className='flex flex-row h-[105px] absolute z-10 bg-gradient-to-l from-black'>
        WElcom
      </div> */}
    </>
  );
};

export default Browse;
