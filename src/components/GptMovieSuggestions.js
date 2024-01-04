import React from "react";
import { useSelector } from "react-redux";
import GptMovieSuggestionList from "./GptMovieSuggestionList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div>
      <div className="-mt-24">
        <h2 className="text-xl md:text-3xl text-white md:px-6 px-3 font-semibold md:font-bold mb-4">
          Movie Suggestions
        </h2>
        {movieNames.map((movieName, index) => (
          <GptMovieSuggestionList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
