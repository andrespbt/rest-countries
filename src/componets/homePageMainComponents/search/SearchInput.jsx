import { useEffect, useState } from 'react';
import { useGetCountriesByNameQuery } from '../../../store/apis/countriesAPI';
import { SearchIcon } from '../../icons/SearchIcon';
import { Suggestions } from './Suggestions';

export const SearchInput = ({ isMobile }) => {
  const [searchInput, setSearchInput] = useState('');

  const { data = [] } = useGetCountriesByNameQuery(searchInput, { skip: !searchInput });

  useEffect(() => {
    if (!searchInput) setSearchInput('');
  }, [searchInput]);

  return (
    <div className="w-full mx-auto shadow-xl dark:text-white dark:bg-darkBlue rounded-md bg-white relative">
      <SearchIcon
        width="16px"
        height="16px"
        className="absolute ml-4 top-4 fill-darkGray/40 dark:fill-white stroke-2"
      />
      <input
        className={`${
          isMobile ? 'placeholder:text-sm text-sm' : 'placeholder:text-md text-md'
        }  w-full h-[50px] pl-14 dark:placeholder:text-white placeholder:text-darkGray/40 dark:bg-darkBlue rounded-md focus:outline-none`}
        type="text"
        placeholder="Search for a country..."
        onChange={e => setSearchInput(e.target.value)}
        value={searchInput}
      />
      {data.length > 0 && searchInput.length > 0 && <Suggestions results={data} />}
    </div>
  );
};
