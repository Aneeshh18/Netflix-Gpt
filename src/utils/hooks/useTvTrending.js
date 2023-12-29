import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addTvTrendingList } from "../moviesSlice";
import { useEffect } from "react";

const useTvTrending = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTvTrendingList(json.results));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useTvTrending;
