import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addAiringTvShow } from "../moviesSlice";
import { useEffect } from "react";

const useAiringTvShow = () => {
  const dispatch = useDispatch();

  const AiringTvShowList = useSelector(store => store.movies.AiringTvShowList);

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
    !AiringTvShowList && getNowPlaying();
  }, []);
};

export default useAiringTvShow;
