import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import {NetflixBG} from "../utils/constant";


const GptSearch = () => {
  return (
    <div>
        <div className="brightness-50 -z-10 w-screen fixed">
        <img className="h-screen object-cover md:w-screen"
          src={NetflixBG}
          alt="bg-img"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch