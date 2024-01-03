import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addUpcomingMovies } from "../moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const UpComingMovieList = useSelector(store => store.movies.UpComingMovieList);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !UpComingMovieList && getNowPlaying();
  }, []);
};

export default useUpComingMovies;
