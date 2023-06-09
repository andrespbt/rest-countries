import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../store/features/countries/countriesSlice';
import { setFilterMenuOpen } from '../../../store/features/ui/uiSlice';
import { DownArrow } from '../../icons/DownArrow';
import { FilterOptions } from './FilterOptions';

export const FilterSelect = ({ isMobile }) => {
  const { isFilterMenuOpen } = useSelector(state => state.ui);
  const [text, setText] = useState('Filter by Region');
  const dispatch = useDispatch();

  const onFilterMenuClick = () => {
    dispatch(setFilterMenuOpen(true));
  };

  const onOptionClick = e => {
    const continent = e.target.innerText === 'None' ? '' : e.target.innerText;

    dispatch(setFilter({ filter: continent }));
    setText(continent ? continent : 'None');
  };

  return (
    <div
      className={`${
        isMobile ? 'text-sm' : 'text-base'
      } h-[50px] bg-white dark:bg-darkBlue dark:text-white rounded-md w-[50%] px-4 table shadow-xl relative max-w-[200px] hover:cursor-pointer`}
      onClick={onFilterMenuClick}>
      <span className="table-cell align-middle select-none">{text}</span>
      <DownArrow
        width="16px"
        height="16px"
        className={`${isFilterMenuOpen && 'rotate-180'} absolute top-[1.1rem] right-3 dark:fill-white`}
      />
      {isFilterMenuOpen && <FilterOptions onOptionClick={onOptionClick} />}
    </div>
  );
};
