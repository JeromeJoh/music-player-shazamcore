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
  return song.type === 'MUSIC'
  ? 
  (
    <div
      className={`w-full flex justify-around items-center ${
        activeSong?.title === song?.title ? "bg-[#f5f5f5]" : "bg-transparent"
      } p-4 cursor-pointer border-borderGray border-b-[.5px] group transition-hover hover:shadow-inner`}
    >
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20"
          src={song?.images?.coverart || loader}
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song?.id}`}>
            <p className="mb-3 w-4/5 text-titleBlack font-bold text-lg truncate group-hover:text-activeBlue transition">{song?.title}</p>
          </Link>
          <p className="max-w-full w-fit text-textBlack text-sm truncate hover:text-black transition">{song?.subtitle}</p>
        </div>
      </div>
      <div className="text-gray hover:text-activeBlue">
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
      className={`w-full flex justify-around items-center ${
        activeSong?.title === song?.attributes.name ? "bg-[#f5f5f5]" : "bg-transparent"
      } p-4 cursor-pointer border-borderGray border-b-[.5px] group transition-hover hover:shadow-inner`}
    >
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20"
          src={song?.attributes?.artwork?.url}
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song?.attributes?.playParams?.id}`}>
            <p className="mb-3 w-4/5 text-titleBlack font-bold text-lg truncate group-hover:text-activeBlue transition">{song?.attributes.name}</p>
          </Link>
          <p className="max-w-full w-fit text-textBlack text-sm truncate hover:text-black transition">{song?.attributes.artistName}</p>
        </div>
      </div>
      <div className="text-gray hover:text-activeBlue">
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
}

export default SongBar;