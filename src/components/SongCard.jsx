import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loader } from "../assets";

import { PlayPause } from "../components";
import { useCallback } from "react";

import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {

  const dispatch = useDispatch();

  const handlePauseClick = useCallback(() => {
    dispatch(playPause(false));
  }, []);

  const handlePlayClick = useCallback(() => {
    dispatch(setActiveSong({ song, data, i}));
    dispatch(playPause(true));
  }, []);

  return (
    <article className="flex flex-col justify-center items-start border-bgGray border-[.5px] p-8 transition-hover hover:shadow-inner cursor-pointer">

      {/* Cover */}
      <div className="relative w-full group">
        <img src={song.images?.coverart || loader} alt="cover" />
        <div className={`absolute inset-0 text-bgWhite hover:bg-black hover:bg-opacity-50 group-hover:grid ${activeSong?.title === song.title ? 'bg-black bg-opacity-50' : 'hidden'}`}>
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlay={handlePlayClick}
            handlePause={handlePauseClick}
          />
        </div>
      </div>

      {/* Song Info */}
      <div className="w-full flex flex-col items-start mt-4">
        <p className="max-w-full mb-1 text-titleBlack font-bold text-lg truncate hover:text-activeBlue transition">
          <Link to={`/songs/${song.key}`}>{song.title}</Link>
        </p>
        <p className="max-w-full text-textBlack text-sm truncate hover:text-activeBlue transition">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-charts"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </article>
  );
};

export default SongCard;
