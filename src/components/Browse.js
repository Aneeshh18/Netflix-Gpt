import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
