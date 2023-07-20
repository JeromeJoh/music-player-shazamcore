import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { data } from "autoprefixer";

const HotSongs = ({}) => <div></div>;

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="歌手信息加载中..." />;

  if (error) return <Error />;

  return (
    <>
      <div className="rounded-md border-[1px] border-x-[.5px] border-borderGray bg-white overflow-hidden shadow-sm mb-8">
        <div className="flex justify-between items-center h-20 font-bold px-4 py-4 border-b-[.5px] border-borderGray bg-bgWhite">
          <h2 className="text-2xl text-titleBlack">歌手详情</h2>
        </div>
        <DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />
      </div>

      <RelatedSongs
        title="热门单曲"
        data={artistData?.data[0].views["top-songs"]?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </>
  );
};

export default ArtistDetails;
