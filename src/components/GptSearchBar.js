import React from 'react'
import { useSelector } from 'react-redux';
import lang from "../utils/languageConstant";

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)
    return (
        <div className='flex justify-center p-[10%] '>
            <form onClick={(e) => e.preventDefault()} className='flex justify-center gap-3' >

                {/* <h1 className='text-white mt-3'>GPT - Movie Suggestion Search </h1> */}

                <input type="text" className='ml-10 px-3 font-body font-normal text-black w-[450px] h-12 rounded-md' placeholder={lang[langKey].gptSearchPlaceholder} />

                <button className='bg-red-600 text-white px-12 h-12 rounded-md hover:bg-red-800'>{lang[langKey].gptSearch}</button>
            </form>

        </div>
    )
}

export default GptSearchBar;