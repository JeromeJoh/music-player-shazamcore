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
      <FaPauseCircle className="h-10 w-10" onClick={handlePause} />
    ) : (
      <FaPlayCircle className="h-10 w-10" onClick={handlePlay} />
    )}
  </div>
);

export default PlayPause;
