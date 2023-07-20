import { Loader, Error, PlayPause } from "../components";

import { loader } from "../assets";
import { TfiMoreAlt } from 'react-icons/tfi';

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useCallback } from "react";

const TopChartCard = ({
  song,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className="w-full flex justify-around items-center p-4 cursor-pointer border-borderGray border-b-[.5px] group transition-hover hover:shadow-inner">
      <div className="w-full flex-1 flex items-center overflow-hidden">
        <img
          className="w-20 h-20"
          src={song?.images?.coverart || loader}
          alt={song?.title}
        />
        <div className="w-full flex flex-col mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="w-fit max-w-[72%] mb-1 text-titleBlack font-bold text-lg truncate group-hover:text-activeBlue transition">{song?.title}</p>
          </Link>
          <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className="max-w-full w-fit text-textBlack text-sm truncate hover:text-black transition">{song?.subtitle}</p>
          </Link>
        </div>
      </div>
  
      <div className="text-gray hover:text-activeBlue ml-4">
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
    </div>
  );
}

const Discover = () => {

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  
  const handlePauseClick = useCallback(() => {
    dispatch(playPause(false));
  }, []);
  
  const handlePlayClick = useCallback((song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }, []);

  if(isFetching) return <Loader title="加载中..." />;
  if(error) return <Error text="加载出错，请重试" />;

  const topSingles = data?.slice(0, 10);

  return (
    <>
      {/* Singles Chart*/}
      <section className="rounded-md border-[1px] border-x-[.5px] border-borderGray bg-white shadow-sm mb-8 overflow-hidden">
        <div className="flex justify-between items-center h-20 font-bold px-4 py-4 border-b-[.5px] border-borderGray bg-bgWhite">
          <h2 className="text-2xl text-titleBlack">热门推荐</h2>
          <Link to="/top-charts">
            <TfiMoreAlt className="text-gray h-6 w-6 mr-2 cursor-pointer hover:text-activeBlue transition" />
          </Link>
        </div>

        <div className="flex flex-col animate-slideup">
          {topSingles?.map((song, i) => (
            <TopChartCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </section>

      {/* Artists Chart*/}
      <section className="rounded-md border-[1px] border-x-[.5px] border-borderGray bg-white overflow-hidden shadow-sm mb-8">
        <div className="flex justify-between items-center h-20 font-bold px-4 py-4 border-b-[.5px] border-borderGray bg-bgWhite">
          <h2 className="text-titleBlack text-2xl">当红艺人</h2>
          <Link to="/top-artists">
            <TfiMoreAlt className="text-gray h-6 w-6 mr-2 cursor-pointer hover:text-activeBlue transition" />
          </Link>
        </div>

      <div className="p-4 select-none">
        <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
          >
            {topSingles?.map((artist) => (
              <SwiperSlide
                key={artist?.key}
                style={{ width: "25%", height: "auto" }}
                className="animate-slideright"
              >
                <Link to={`/artists/${artist?.artists[0].adamid}`}>
                  <img
                    src={artist?.images?.background}
                    alt="Name"
                    className="w-full object-cover rounded-md"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
      </section>
    </>
  );
};

export default Discover;
