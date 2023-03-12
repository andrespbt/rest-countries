import { useSelector } from 'react-redux';
import { FilterSelect } from './homePageMainComponents/FilterSelect';
import { SearchInput } from './homePageMainComponents/SearchInput';

export const HomePageMain = () => {
  const { isMobile } = useSelector(state => state.ui);

  return (
    <main className="bg-veryLightGray py-4 px-6 dark:bg-veryDarkBlueDarkMode">
      <section className={`${!isMobile ? '' : 'flex-col gap-12 justify-start'} flex w-full`}>
        <SearchInput isMobile={isMobile} />
        <FilterSelect isMobile={isMobile}/>
      </section>
    </main>
  );
};
