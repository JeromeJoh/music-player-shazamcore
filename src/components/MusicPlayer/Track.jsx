import React from 'react';
import { loader } from '../../assets';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start text-bgWhite">
    <div className={`${isPlaying && isActive ? 'animate-[spin_9s_linear_infinite]' : ''} hidden sm:block h-20 w-20 mr-4 border-4 rounded-full border-[#2a292f]`}>
      <img src={activeSong?.images?.coverart || loader} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-fit space-y-1">
      <p className="truncate font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'Song Name'}
      </p>
      <p className="truncate">
        {activeSong?.subtitle ? activeSong?.subtitle : 'Artists'}
      </p>
    </div>
  </div>
);

export default Track;