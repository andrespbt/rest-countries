import { PaginationArrowIcon } from '../icons/PaginationArrowIcon';

export const ArrowPagination = ({ onClick, rotate, viewBox, currentPage, disableNumber }) => {
  return (
    <li
      className="p-3 h-[32px] text-center my-auto mx-1 flex items-center"
      onClick={onClick}>
      <PaginationArrowIcon
        className={`${currentPage === disableNumber && 'fill-darkGray dark:fill-darkGray'} ${
          rotate && 'rotate-180'
        } dark:fill-white`}
        viewBox={viewBox}
      />
    </li>
  );
};
