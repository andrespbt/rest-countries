import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/features/countries/countriesSlice';
import { DownArrow } from '../icons/DownArrow';
import { FilterOptions } from './FilterOptions';

export const FilterSelect = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      onClick={() => setIsOpen(!isOpen)}>
      <span className="table-cell align-middle">{text}</span>
      <DownArrow
        width="16px"
        height="16px"
        className={`${isOpen && 'rotate-180'} absolute top-[1.1rem] right-3 dark:fill-white`}
      />
      {isOpen && <FilterOptions onOptionClick={onOptionClick} />}
    </div>
  );
};
