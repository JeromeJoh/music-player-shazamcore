import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="rounded-md border-[1px] border-x-[.5px] border-borderGray bg-white overflow-hidden shadow-sm mb-8">

      {/* Section Header */}
      <div className="flex justify-between items-center h-20 font-bold px-4 py-4 border-b-[.5px] border-borderGray bg-bgWhite">
        <h2 className="text-2xl text-titleBlack">
          当红艺人
        </h2>
      </div>

      {/* Section Content */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
      {data?.map((track) => <ArtistCard key={track.key} track={track} />)}
      </div>
    </div>
  );
};

export default TopArtists;