import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log(title, movies);
    if (!movies) return;
    return (
        <div >
            <div className="text-white font-body font-medium text-2xl px-9 pt-5">{title}</div>
            <div className='flex overflow-hidden hover:overflow-x-scroll pt-4 ml-2 scrollbar-hide'>
                <div className="flex">
                    {movies.map((movie) => (
                        <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
