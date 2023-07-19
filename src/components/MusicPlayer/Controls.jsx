import { PiShuffleBold, PiRepeatBold } from 'react-icons/pi';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled, TbPlayerPlayFilled, TbPlayerPauseFilled } from 'react-icons/tb';

const playPauseButton = '';
const prevNextButton = 'bg-red-500 border-borderGray border-2 rounded-full cursor-pointer';
const sideButton = 'hidden sm:block cursor-pointer w-6 h-6 hover:text-bgWhite';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80 mb-4">
    <PiRepeatBold size={18} color={repeat ? '#fafafa' : '#000'} onClick={() => setRepeat((prev) => !prev)} className={sideButton} />
    {currentSongs?.length && <TbPlayerTrackPrevFilled size={16} color="#fafafa" onClick={handlePrevSong} />}
    {isPlaying ? (
      <TbPlayerPauseFilled size={36} color="#fafafa" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <TbPlayerPlayFilled size={36} color="#fafafa" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && <TbPlayerTrackNextFilled size={30} color="#fafafa" className="cursor-pointer" onClick={handleNextSong} />}
    <PiShuffleBold size={18} color={shuffle ? '#fafafa' : '#000'} onClick={() => setShuffle((prev) => !prev)} className={sideButton} />
  </div>
);

export default Controls;