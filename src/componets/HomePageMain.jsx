import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllCountriesByRegionQuery, useGetCountriesQuery } from '../store/apis/countriesAPI';
import { setFilterMenuOpen } from '../store/features/ui/uiSlice';
import { FilterSelect, SearchInput, CardList } from './';
import { SkeletonList } from './homePageMainComponents/skeleton/SkeletonList';

export const HomePageMain = () => {
  const [updatedData, setUpdatedData] = useState([]);
  const { isMobile, isFilterMenuOpen } = useSelector(state => state.ui);
  const { filter } = useSelector(state => state.countries);
  const { data = [], isSuccess } = filter ? useGetAllCountriesByRegionQuery(filter) : useGetCountriesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (filter) {
      setUpdatedData(data);
    } else {
      setUpdatedData(data.slice(0, 50));
    }
  }, [isSuccess, filter]);

  const onMainClick = () => {
    isFilterMenuOpen && dispatch(setFilterMenuOpen(false));
  };

  return (
    <main
      className="bg-veryLightGray py-4 dark:bg-veryDarkBlueDarkMode md:min-h-[calc(100vh-123px)] "
      onClick={onMainClick}>
      <section
        className={`${
          isMobile ? 'flex-col gap-12 justify-start' : ''
        } flex w-full px-6 flex-wrap gap-[3rem] md:justify-between`}>
        <SearchInput isMobile={isMobile} />
        <FilterSelect isMobile={isMobile} />
      </section>
      <section className={`${isMobile ? 'text-sm' : 'text-md'} w-full h-full`}>
        {isSuccess ? <CardList data={updatedData} /> : <SkeletonList />}
      </section>
    </main>
  );
};
