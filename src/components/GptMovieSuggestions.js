import React from "react";
import { useSelector } from "react-redux";
import GptMovieSuggestionList from "./GptMovieSuggestionList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div>
      <div>
        <h2 className="text-3xl md:text-2xl text-white px-8 font-semibold md:font-bold mb-4">
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
