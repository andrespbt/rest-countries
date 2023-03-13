import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllCountriesByRegionQuery, useGetCountriesQuery } from '../../store/apis/countriesAPI';

export const CardList = () => {
  return (
    <>
      <ul>
        <li>
            <div></div>
        </li>
      </ul>
    </>
  );
};
