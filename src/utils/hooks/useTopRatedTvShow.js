import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addTopRatedTvShow } from "../moviesSlice";
import { useEffect } from "react";

const useTopRatedTvShow = () => {
  const dispatch = useDispatch();

  const TopRatedTvShowList = useSelector(store => store.movies.TopRatedTvShowList);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedTvShow(json.results));
  };

  useEffect(() => {
    !TopRatedTvShowList && getNowPlaying();
  }, []);
};

export default useTopRatedTvShow;
