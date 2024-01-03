import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import addPopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovie from "../utils/hooks/useTopRatedMovie";
import useUpComingMovies from "../utils/hooks/useUpComingMovies";
import useTvTrending from "../utils/hooks/useTvTrending";
import useAiringTvShow from "../utils/hooks/useAiringTvShow";
import usePopularTvShow from "../utils/hooks/usePopularTvShow";
import useTopRatedTvShow from "../utils/hooks/useTopRatedTvShow";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  addPopularMovies();
  useTopRatedMovie();
  useUpComingMovies();
  useTvTrending();
  useAiringTvShow();
  usePopularTvShow();
  useTopRatedTvShow();

  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
