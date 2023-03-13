import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllCountriesByRegionQuery, useGetCountriesQuery } from '../store/apis/countriesAPI';
import { FilterSelect, SearchInput, CardList } from './';
import { SkeletonList } from './homePageMainComponents/skeleton/SkeletonList';

export const HomePageMain = () => {
  const [updatedData, setUpdatedData] = useState([]);
  const { isMobile } = useSelector(state => state.ui);
  const { filter } = useSelector(state => state.countries);
  const { data = [], isFetching } = filter ? useGetAllCountriesByRegionQuery(filter) : useGetCountriesQuery();

  useEffect(() => {
    if (filter) {
      setUpdatedData(data);
    } else {
      setUpdatedData(data.slice(0, 50));
    }
  }, [isFetching, filter]);

  return (
    <main className="bg-veryLightGray py-4 dark:bg-veryDarkBlueDarkMode">
      <section className={`${isMobile ? 'flex-col gap-12 justify-start' : ''} flex w-full px-6`}>
        <SearchInput isMobile={isMobile} />
        <FilterSelect isMobile={isMobile} />
      </section>
      <section className={`${isMobile ? 'text-sm' : 'text-md'} w-full`}>
        {isFetching ? <SkeletonList /> : <CardList data={updatedData} />}
      </section>
    </main>
  );
};
