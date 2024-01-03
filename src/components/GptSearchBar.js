import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMoiveResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const [loading, setLoading] = useState(false);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = async () => {
        setLoading(true);
        console.log(searchText.current.value);

        const gptQuery =
            "Act as a movie recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar 2, Sholay, Jawan, OMG 2, Mission Impossible 3";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if (!gptResults.choices || !gptResults.choices[0]?.message?.current) {
            console.error("Error during GPT search");
        }

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); //return promises
        const tmdbResults = await Promise.all(promiseArray);
        setLoading(false);

        dispatch(addGptMoiveResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    }

    return (
        <div className="flex justify-center p-[10%] ">
            <form
                onClick={(e) => e.preventDefault()}
                className="flex justify-center gap-3"
            >
                {/* <h1 className='text-white mt-3'>GPT - Movie Suggestion Search </h1> */}

                <input
                    ref={searchText}
                    type="text"
                    className="ml-10 px-3 font-body font-normal text-black w-[450px] h-12 rounded-md"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />

                <button className="bg-red-600 text-white px-12 h-12 rounded-md hover:bg-red-800"
                    onClick={handleGptSearchClick}
                >
                    {loading && (
                        <div className="fixed top-1/2 md:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="flex items-center space-x-2">
                                <div className="w-16 h-16 relative">
                                    <div className="w-full h-full border-t-4 border-r-4 border-b-4 border-red-500 rounded-full animate-spin absolute top-0 left-0"></div>
                                    <div className="w-full h-full border-t-4 border-r-4 border-b-4 border-transparent rounded-full animate-spin absolute top-0 left-0 animate-reverse"></div>
                                </div>
                                <div className="text-red-500 text-xl font-semibold">Loading...</div>
                            </div>
                        </div>
                    )}
                    {!loading && lang[langKey].gptSearch}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
