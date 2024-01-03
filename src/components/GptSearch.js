import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import {NetflixBG} from "../utils/constant";


const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
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