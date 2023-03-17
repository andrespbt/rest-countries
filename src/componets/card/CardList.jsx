import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from './Card';
import { Pagination } from './Pagination';

export const CardList = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isMobile } = useSelector(state => state.ui);
  const pageSize = isMobile ? 7 : 8;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <>
      <ul className="w-[80%] flex flex-col items-center mx-auto px-6 md:flex-row gap-4 flex-wrap md:px-0 md:w-full md:my-8 md:gap-0 md:gap-x-24 md:justify-center max-w-[1440px]">
        {currentTableData.map(({ flags, ccn3, name, population, region, capital, alpha3Code = '' }) => (
          <Card
            info={{ flags, name, population, region, capital, ccn3, alpha3Code }}
            key={ccn3 ? ccn3 : alpha3Code}
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
