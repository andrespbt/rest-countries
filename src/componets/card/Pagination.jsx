import { useSelector } from 'react-redux';
import { DOTS, usePagination } from '../../hooks/usePagination';
import { ArrowPagination } from './ArrowPagination';

export const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {
  const { isMobile } = useSelector(state => state.ui);
  const paginationRange =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) || '';

  //   If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="flex text-xs justify-center">
      {/* Left navigation arrow */}
      <ArrowPagination
        onClick={onPrevious}
        rotate={true}
        viewBox={`${isMobile ? '1 2 15 15' : '1 2 10 10'}`}
        currentPage={currentPage}
        disableNumber={1}
      />
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li
              key={index}
              className="border-0 flex items-end mx-1 pb-1 max-w-[25px] dark:text-white">
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            className={`${pageNumber === currentPage && ' dark:text-white dark:bg-darkBlue bg-darkGray/30'} ${
              pageNumber !== DOTS && 'border-[1px]'
            } p-3 h-[25px] text-center my-auto mx-1 flex items-center justify-center rounded-md max-w-[25px] bg-white border-darkGray/20 hover:cursor-pointer md:h-10 md:mx-2 md:w-16 md:max-w-none select-none`}
            key={index}
            onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <ArrowPagination
        onClick={onNext}
        rotate={false}
        viewBox={`${isMobile ? '1 -2 15 15' : '0 4 10 10'}`}
        currentPage={currentPage}
        disableNumber={lastPage}
      />
    </ul>
  );
};
