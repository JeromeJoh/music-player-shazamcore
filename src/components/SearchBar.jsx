import { useCallback, useRef } from 'react';
import { TbCloudSearch } from 'react-icons/tb';

import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const searchTerm = inputRef.current.value;

    inputRef.current.blur();
    if(!searchTerm) return;
    
    navigate(`/search/${inputRef.current.value}`);
    inputRef.current.value = '';
  });

  return (
    <form 
      onSubmit={handleSubmit}
      autoComplete="off"
      className="relative py-6 text-gray w-full rounded-sm"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <input 
        ref={inputRef}
        name="search-field"
        autoComplete="off"
        spellCheck="false"
        id="search-field"
        className="w-32 pl-12 py-2 text-base align-middle rounded-full bg-transparent border-gray border-[1px] transition-all focus:w-1/2 shadow-sm focus:border-activeBlue"
        type="text"
        placeholder="Search"
      />
      <TbCloudSearch className="absolute left-3 top-8 h-6 w-6" />
    </form>
  )
};

export default SearchBar;