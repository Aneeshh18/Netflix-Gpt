import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addAiringTvShow } from "../moviesSlice";
import { useEffect } from "react";

const useAiringTvShow = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addAiringTvShow(json.results));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useAiringTvShow;
