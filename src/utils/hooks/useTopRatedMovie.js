import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addTopRatedMovies } from "../moviesSlice";
import { useEffect } from "react";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useTopRatedMovie;
