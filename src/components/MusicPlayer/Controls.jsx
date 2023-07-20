import { PiShuffleBold, PiRepeatBold } from 'react-icons/pi';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled, TbPlayerPlayFilled, TbPlayerPauseFilled } from 'react-icons/tb';

const prevNextButton = 'grid place-items-center cursor-pointer w-12 h-12 rounded-full border-4 border-[#2a292f] bg-[#eee] text-black';
const sideButton = 'hidden sm:block cursor-pointer w-6 h-6 hover:text-bgWhite';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around mb-4">
    <PiRepeatBold size={18} color={repeat ? '#fafafa' : '#000'} onClick={() => setRepeat((prev) => !prev)} className={`mr-4 ${sideButton}`} />
    {currentSongs?.length && <div className={prevNextButton}><TbPlayerTrackPrevFilled className="w-5 h-5" onClick={handlePrevSong} /></div>}
    <div className="grid place-items-center cursor-pointer w-14 h-14 rounded-full border-4 border-[#2a292f] bg-[#eee] mx-3 text-black">
      {isPlaying ? (
        <TbPlayerPauseFilled onClick={handlePlayPause} className="w-7 h-7" />
      ) : (
        <TbPlayerPlayFilled onClick={handlePlayPause} className="w-7 h-7" />
      )}
    </div>
    {currentSongs?.length && <div className={prevNextButton}><TbPlayerTrackNextFilled className="w-5 h-5" onClick={handleNextSong} /></div>}
    <PiShuffleBold size={18} color={shuffle ? '#fafafa' : '#000'} onClick={() => setShuffle((prev) => !prev)} className={`ml-4 ${sideButton}`} />
  </div>
);

export default Controls;