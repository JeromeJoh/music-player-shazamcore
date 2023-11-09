import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';


const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <article
      className="relative flex flex-col justify-center items-start border-bgGray border-[.5px] p-8 transition-hover hover:shadow-inner cursor-pointer group"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <p title={track?.subtitle} className="max-w-full mb-2 text-black font-bold text-lg truncate transition group-hover:text-activeBlue">
        {track?.subtitle}
      </p>
      <p className="w-full text-sm my-2 font-light opacity-60 border-t-[.5px] border-bgGray pt-4">Newest Release</p>
      <img alt="cover" src={track?.images?.coverart || loader}/>
    </article>
  );
};

export default ArtistCard;