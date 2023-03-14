import { useEffect, useMemo, useState } from 'react';
import { usePagination } from '../../hooks/usePagination';
import { PaginationArrowIcon } from '../icons/PaginationArrowIcon';
import { Card } from './Card';
import { Pagination } from './Pagination';

export const CardList = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <>
      <ul className="w-[80%] flex flex-col items-center mx-auto px-6 md:flex-row gap-4 flex-wrap md:px-0 md:mx-0 md:w-full md:justify-evenly md:my-8">
        {currentTableData.map(({ flags, ccn3, name, population, region, capital }) => (
          <Card
            info={{ flags, name, population, region, capital, ccn3 }}
            key={ccn3}
          />
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};
