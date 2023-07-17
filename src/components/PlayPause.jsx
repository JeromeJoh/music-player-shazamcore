import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const PlayPause = ({
  song,
  isPlaying,
  activeSong,
  handlePlay,
  handlePause,
}) => (
  <div 
    className="h-full w-full grid place-items-center"
  >
    {isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle className="text-bgWhite h-10 w-10" />
    ) : (
      <FaPlayCircle className="text-bgWhite h-10 w-10" />
    )}
  </div>
);

export default PlayPause;
