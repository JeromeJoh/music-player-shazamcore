import SongBar from "./SongBar";

const RelatedSongs = ({
  title,
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="rounded-md border-[1px] border-x-[.5px] border-borderGray bg-white overflow-hidden shadow-sm mb-8">
    <div className="flex justify-between items-center h-20 font-bold px-4 py-4 border-b-[.5px] border-borderGray bg-bgWhite">
      <h2 className="text-2xl text-titleBlack">{title}</h2>
    </div>
    <div className="">
      {data?.map((song, i) => (
        <SongBar
          key={`${artistId}-${song.key}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={() => handlePlayClick(song, i)}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
