import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addTrailerVideo } from "../moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movies.trailerVideo);


  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();


    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
    // console.log(trailerVideo?.key);
  };

  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
