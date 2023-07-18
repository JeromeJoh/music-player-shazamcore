import { Loader, Error, SongCard } from "../components";

import { genres } from "../assets/constants";
import { button } from "../assets";

import { useDispatch, useSelector } from 'react-redux';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId);

  if(isFetching) return <Loader title="加载中..."/>;

  if(error) return <Error text="数据加载错误，请刷新重试"/>;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="rounded-md border-[1px] border-x-[.5px] border-borderGray bg-white overflow-hidden shadow-sm mb-8">

      {/* Section Header */}
      <div className="relative flex justify-between items-center h-20 font-bold px-4 py-4 border-b-[.5px] border-borderGray bg-bgWhite">
        <h2 className="text-2xl text-titleBlack">
          当前类目：<span className="font-mono">{genreTitle}</span>
        </h2>

        {/* Selector */}
        <div className="select-none">
          <select 
            className="w-8 h-8 bg-transparent rounded-full outline-none appearance-none text-xs text-bgWhite cursor-pointer"
            onChange={(e) => dispatch(selectGenreListId(e.target.value))}
            value={genreTitle}
          >
            <option value={genres[0].value} className="hidden"></option>
            {genres.map(({ title, value }) => {
              return (
                <option
                  key={value}
                  className="px-2 py-4 text-black"
                  value={value}
                >
                  {title}
                </option>
              );
            })}
          </select>
        </div>
        <img src={button} alt="Genres" className="w-16 h-16 absolute top-2 right-0 pointer-events-none rotate-90" />
      </div>

      {/* Section Content */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {data.map((song, i) => (
          <SongCard 
            key={song.key} 
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i} 
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
