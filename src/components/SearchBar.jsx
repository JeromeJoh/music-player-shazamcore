import { TbCloudSearch } from 'react-icons/tb';

const SearchBar = () => {
  return (
    <div className="relative py-6 text-gray w-full rounded-sm">
      <input className="w-32 pl-12 py-2 text-base align-middle rounded-full bg-transparent border-gray border-[1px] transition-all focus:w-1/2 shadow-sm focus:border-activeBlue"
      type="text"
      placeholder="Search"
      onChange={ () => { } }
      />
      <TbCloudSearch className="absolute left-3 top-8 h-6 w-6" />
    </div>
  )
};

export default SearchBar;