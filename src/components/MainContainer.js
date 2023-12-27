import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import TrailerVideoBackground from "./TrailerVideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovies = movies[0];
  console.log(mainMovies);

  const { original_title, id, overview } = mainMovies;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <TrailerVideoBackground movieId = {id}/>
    </div>
  );
};

export default MainContainer;
