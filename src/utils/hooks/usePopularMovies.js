import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addPopularMovies } from "../moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMoviesList = useSelector(store => store.movies.popularMoviesList);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMoviesList && getNowPlaying();
  }, []);
};

export default usePopularMovies;
