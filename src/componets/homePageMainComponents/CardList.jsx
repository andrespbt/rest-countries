import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllCountriesByRegionQuery, useGetCountriesQuery } from '../../store/apis/countriesAPI';
import { HomePageSkeleton } from './HomePageSkeleton';

export const CardList = () => {
  const { filter, isLoading } = useSelector(state => state.countries);
  const { data = [], isFetching } = filter ? useGetAllCountriesByRegionQuery(filter) : useGetCountriesQuery();
  const [countriesList, setCountriesList] = useState(data);

  useEffect(() => {
    setCountriesList(data);
  }, [isFetching]);

  return (
    <>
    {isLoading ? <HomePageSkeleton /> : ''}
    </>
    );
};
