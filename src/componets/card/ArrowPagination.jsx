import { PaginationArrowIcon } from '../icons/PaginationArrowIcon';

export const ArrowPagination = ({ onClick, rotate, viewBox, currentPage, disableNumber }) => {
  return (
    <li
      className="p-3 h-[32px] text-center my-auto mx-1 flex items-center hover:cursor-pointer"
      onClick={onClick}>
      <PaginationArrowIcon
        className={`${currentPage === disableNumber ? 'fill-darkGray dark:fill-[#808080]' : 'dark:fill-white'} ${
          rotate && 'rotate-180'
        }  md:w-9`}
        viewBox={viewBox}
      />
    </li>
  );
};
