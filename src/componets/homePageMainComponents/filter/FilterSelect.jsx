import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../store/features/countries/countriesSlice';
import { DownArrow } from '../../icons/DownArrow';
import { FilterOptions } from './FilterOptions';

export const FilterSelect = ({ isMobile }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [text, setText] = useState('Filter by Region');
  const dispatch = useDispatch();

  const onOptionClick = e => {
    const continent = e.target.innerText;
    dispatch(setFilter({ filter: continent }));
    setText(continent);
  };

  return (
    <div
      className={`${
        isMobile ? 'text-sm' : 'text-base'
      } h-[50px] bg-white dark:bg-darkBlue dark:text-white rounded-md w-[50%] px-4 table shadow-xl relative`}
      onClick={() => setIsFilterOpen(!isFilterOpen)}>
      <span className="table-cell align-middle">{text}</span>
      <DownArrow
        width="16px"
        height="16px"
        className={`${isFilterOpen && 'rotate-180'} absolute top-[1.1rem] right-3 dark:fill-white`}
      />
      {isFilterOpen && <FilterOptions onOptionClick={onOptionClick} />}
    </div>
  );
};
