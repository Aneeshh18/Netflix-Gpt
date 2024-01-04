import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 md:pt-80 px-4 md:px-16 absolute w-full h-full aspect-video bg-gradient-to-r from-black text-white">
      {/* Title */}
      <div className="pt-10 md:pt-0 text-lg md:text-3xl lg:text-5xl mb-2 line-clamp-2 font-bold text-center md:text-left ">
        {title}
      </div>

      {/* Overview */}
      <div className="hidden md:inline-block md:w-1/4 md:py-4 text-center md:text-left">
        {overview}
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center md:justify-start md:mt-4 md:ml-0 sm:-mt-3 sm:ml-4 text-center md:text-left">
        <button className="bg-white text-black p-1 md:p-3 px-4 md:px-8 text-sm md:text-xl rounded-md opacity-80 hover:opacity-60 align-middle">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-1 md:p-3 px-4 md:px-8 text-sm md:text-xl rounded-md mx-2 mt-0 md:mt-0 opacity-70 hover:opacity-90 align-middle">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
