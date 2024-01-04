import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="relative z-10 md:-mt-72">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMoviesList} />
        </div>
        <MovieList title={"Popular"} movies={movies?.popularMoviesList} />
        <MovieList title={"TopRated"} movies={movies?.TopRatedMovieList} />
        <MovieList title={"UpComing"} movies={movies?.UpComingMovieList} />
        <MovieList title={"Trending TvShows"} movies={movies?.TvTrendingList} />
        <MovieList title={"Airing Today"} movies={movies?.AiringTvShowList} />
        <MovieList
          title={"Popular TvShows"}
          movies={movies?.PopularTvShowList}
        />
        <MovieList
          title={"TopRated TvShows"}
          movies={movies?.TopRatedTvShowList}
        /> 
      </div>
    )
  );
};

export default SecondaryContainer;
