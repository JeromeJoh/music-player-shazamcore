import { loader } from "../assets";
import PlayPause from "./PlayPause";

import { Link } from "react-router-dom";

const SongBar = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return song.type === 'MUSIC'  // songs or MUSIC
  ? 
  (
    <div
      className={`w-full flex ${
        activeSong?.title === song?.title ? "bg-[#f5f5f5]" : "bg-transparent"
      } p-4 cursor-pointer border-borderGray border-b-[.5px] group transition-hover hover:shadow-inner`}
    >
      <img
          className="w-20 h-20 flex-shrink-0"
          src={song?.images?.coverart || loader}
          alt={song?.title}
        />
      <div className="flex-1 flex flex-col justify-center mx-3 overflow-hidden">
        <Link to={`/songs/${song?.key}`}>
          <p className="text-titleBlack font-bold text-lg group-hover:text-activeBlue transition truncate">{song?.title}</p>
        </Link>
        <p className="max-w-full w-fit text-textBlack text-sm truncate hover:text-black transition">{song?.subtitle}</p>
      </div>
      <div className="text-gray hover:text-activeBlue flex-shrink-0">
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
    </div>
  )
  :
  (
    <div
      className={`w-full flex items-center text-titleBlack font-bold text-lg ${
        activeSong?.title === song?.attributes.name ? "bg-[#f5f5f5]" : "bg-transparent"
      } p-4 cursor-pointer border-borderGray border-b-[.5px] transition-hover hover:shadow-inner`}
    >
      <div className="w-16 h-16 flex">
        <p className="m-auto">{ i }</p>
      </div>
      <img
        className="w-16 h-16"
        src={song?.attributes?.artwork?.url}
        alt={song?.title}
      />
      <p className="flex-1 ml-4 truncate transition">{song?.attributes.name}</p>
    </div>
  )
}

export default SongBar;