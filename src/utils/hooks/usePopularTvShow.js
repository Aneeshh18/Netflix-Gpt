import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addPopularTvShow } from "../moviesSlice";
import { useEffect } from "react";

const usePopularTvShow = () => {
  const dispatch = useDispatch();

  const PopularTvShowList = useSelector(store => store.movies.PopularTvShowList);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularTvShow(json.results));
  };

  useEffect(() => {
    !PopularTvShowList && getNowPlaying();
  }, []);
};

export default usePopularTvShow;
