import axios from 'axios';
import * as localData from '../data/data.json';
import { filterLocalDataByName, filterLocalDataByCode, filterLocalDataByRegion } from './';

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (error) {
      let fallbackDataLocal;
      const splittedUrl = url.split('/');
      if (splittedUrl[1] === 'all') fallbackDataLocal = localData.default;
      if (splittedUrl[1] === 'name') fallbackDataLocal = filterLocalDataByName(localData.default, splittedUrl[2]);
      if (splittedUrl[1] === 'alpha') fallbackDataLocal = filterLocalDataByCode(localData.default, splittedUrl[2]);
      if (splittedUrl[1] === 'region') fallbackDataLocal = filterLocalDataByRegion(localData.default, splittedUrl[2]);
      return {
        data: fallbackDataLocal,
      };
    }
  };
