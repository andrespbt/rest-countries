import { useSelector, useDispatch } from 'react-redux';
import { RestCountries } from '../RestCountries';
import { SearchInput } from './homePageMainComponents/SearchInput';

export const HomePageMain = () => {
  const { isMobile } = useSelector(state => state.ui);

  return (
    <main className="bg-veryLightGray py-4 px-2 dark:bg-veryDarkBlueDarkMode">
      <SearchInput isMobile={isMobile} />
    </main>
  );
};
