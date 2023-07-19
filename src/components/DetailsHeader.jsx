import { Link } from "react-router-dom";
import { vinly } from "../assets";

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="flex justify-start items-center p-8 border-borderGray border-b-[.5px]">

    {/* Cover */}
    <div className="relative">
      <img
        alt="Profile"
        src={
          artistId
            ? artistData?.attributes?.artwork?.url
                .replace("{w}", "500")
                .replace("{h}", "500")
            : songData?.images?.coverart
        }
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-32 w-28 rounded-full object-cover"
      />
      <img src={vinly} alt="Vinly" className="sm:w-60 w-48 object-cover"/>
    </div>

    {/* Name & Artists & Genre */}
    <div className="ml-8">
      <p className="sm:text-3xl text-xl text-titleBlack font-bold">
        {artistId ? artistData?.attributes?.name : songData?.title}
      </p>
      {!artistId && (
        <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
          <p className="text-lg text-textBlack my-2 hover:text-activeBlue">{songData?.subtitle}</p>
        </Link>
      )}

      <p className="text-brightRed select-none italic font-serif mt-4">
        {artistId
          ? artistData?.attributes?.genreNames[0]
          : songData?.genres?.primary}
      </p>
    </div>
  </div>
);

export default DetailsHeader;
