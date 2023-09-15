import { Link } from "react-router-dom";
import { vinly } from "../assets";

const wrapperStyle = 'flex flex-col justify-start py-4 px-8 border-borderGray border-b-[.5px] hover:shadow-inner';
const titleStyle = 'text-titleBlack text-xl font-bold';
const contentStyle = 'text-[#000] select-none italic font-serif mt-4';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  return songData
  ?
  // Song Details
  (
    <div className="flex justify-start items-center p-8 border-borderGray border-b-[.5px]">
  
      {/* Cover */}
      <div className="relative select-none">
        <img
          alt="Profile"
          src={songData?.images?.coverart}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-32 w-28 rounded-full object-cover"
        />
        <img src={vinly} alt="Vinly" className="sm:w-60 w-48 object-cover"/>
      </div>
  
      {/* Name & Artists & Genre */}
      <div className="ml-8 text-titleBlack font-bold">
        <p className="sm:text-3xl text-xl">
          {songData?.title}
        </p>
        <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
          <p className="text-base text-textBlack my-3 hover:text-activeBlue">{songData?.subtitle}</p>
        </Link>
        <p className="w-fit mt-4 mb-2 px-2 font-normal rounded-full text-brightRed select-none italic font-serif border-brightRed border-[1px]">
          {songData?.genres?.primary}
        </p>
        <p className="text-base font-light">Release Date : {songData?.releasedate.split('-').reverse().join('-')}</p>
      </div>
    </div>
  )
  :
  // Artist Details
  (
    <div className="flex flex-col pt-8 border-borderGray border-b-[.5px]">
  
      {/* Cover */}
      <div className="w-full flex flex-col items-center select-none border-borderGray border-b-[.5px]">
        <img
          alt="Profile"
          src={artistData?.attributes?.artwork?.url.replace("{w}", "500").replace("{h}", "500")}
          className="sm:w-40 w-28 rounded-full object-cover"
        />
        <p className="sm:text-3xl text-xl text-titleBlack font-bold m-4 mb-6">
          {artistData?.attributes?.name}
        </p>
      </div>

      <div className={wrapperStyle}>
        <div className={titleStyle}>音乐流派</div>
        <p className={contentStyle}>{artistData?.attributes?.genreNames[0]}</p>
      </div>

      <div className={wrapperStyle}>
        <div className={titleStyle}>国家地区</div>
        <p className={contentStyle}>{artistData?.attributes?.origin}</p>
      </div>

      <div className={wrapperStyle}>
        <div className={titleStyle}>出生日期</div>
        <p className={contentStyle}>{artistData?.attributes?.bornOrFormed}</p>
      </div>

      <div className={wrapperStyle}>
        <div className={titleStyle}>详细介绍</div>
        <div 
          className="my-4 font-serif text-base"
          dangerouslySetInnerHTML={{__html: artistData?.attributes?.artistBio}} 
        />
      </div>
    </div>
  )
}

export default DetailsHeader;
