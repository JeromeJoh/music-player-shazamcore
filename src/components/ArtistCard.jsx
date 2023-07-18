import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';


const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <article
      className="relative flex flex-col justify-center items-start border-bgGray border-[.5px] p-8 transition-hover hover:shadow-inner font-mono cursor-pointer group"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <p className="max-w-full mb-6 text-black font-bold text-lg truncate transition">
        {track?.subtitle}
      </p>
      <img alt="cover" src={track?.images?.coverart || loader} className='border-borderGray border-[1px]'/>
      <p className="w-full text-center text-sm my-2 font-light opacity-60 italic group-hover:text-activeBlue">Newest Release</p>
    </article>
  );
};

export default ArtistCard;