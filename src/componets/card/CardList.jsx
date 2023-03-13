import { useEffect, useState } from 'react';
import { Card } from './Card';

export const CardList = ({ data = [] }) => {
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    setPaginatedData(data.slice(page, page + 7));
  }, [data]);

  const onPageButtonClick = () => {};

  return (
    <>
      <ul className="w-[80%] block mx-auto">
        {paginatedData &&
          paginatedData.map(({ flags, ccn3, name, population, region, capital }) => (
            <Card
              info={{ flags, name, population, region, capital }}
              key={ccn3}
            />
          ))}
      </ul>
      <button onClick={onPageButtonClick}></button>
    </>
  );
};
