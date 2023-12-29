import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-80 px-4 md:px-16 absolute w-full h-full aspect-video bg-gradient-to-r from-black text-white">
      <div className="text-4xl font-medium">{title}</div>
      <div className="text-lg w-1/4 py-4">{overview}</div>
      <div className="mt-4">
        <button className="bg-white text-black p-3 px-8 text-xl rounded-md opacity-80 hover:opacity-60">▶ Play</button>
        <button className="bg-gray-500 text-white p-3 px-8 text-xl rounded-md mx-2 opacity-70 hover:opacity-90">ℹ️ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
