import React from "react";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../utils/hooks/useMovieTrailer";


const TrailerVideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className='w-[100%]'>
      <iframe className='w-[100%] h-[100%] aspect-video' 
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1&rel=0&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default TrailerVideoBackground;
