
import React from "react";
import { PlayIcon } from "@heroicons/react/solid";

const VideoThumbnail = ({ src, title, description, onClick }) => (
  <div className="cursor-pointer group" onClick={onClick}>
    <div className="relative">
      <img
        src={src}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <PlayIcon className="w-16 h-16 text-white" />
      </div>
    </div>
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default VideoThumbnail;
