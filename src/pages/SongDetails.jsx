import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data,
    isFetching: isFetchinRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails && isFetchinRelatedSongs)
    return <Loader title="歌曲信息加载中..." />;

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <>
      {/* Song Details */}
      <div className="rounded-md border-[1px] border-x-[.5px] border-borderGray bg-white overflow-hidden shadow-sm mb-8">
        <div className="flex justify-between items-center h-20 font-bold px-4 py-4 border-b-[.5px] border-borderGray bg-bgWhite">
          <h2 className="text-2xl text-titleBlack">歌曲详情</h2>
        </div>
        
        {/* Song Info */}
        <DetailsHeader artistId={artistId} songData={songData} />

        {/* Lyrics */}
        <div className="py-8 text-center">
          <h2 className="text-titleBlack text-2xl font-bold mb-4">歌词</h2>
          <div className="text-textBlack space-y-4 px-4">
            {songData?.sections[1].type === "LYRICS" ? (
              songData?.sections[1]?.text.map((line, i) => (
                <p
                  key={`lyrics-${line}-${i}`}
                  className="text-gray-400 text-base my-1"
                >
                  {line}
                </p>
              ))
            ) : (
              <p className="text-gray-400 text-base my-1">
                抱歉，目前暂无歌词
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Related Songs */}
      <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </>
  );
};

export default SongDetails;
