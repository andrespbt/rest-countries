import { useSelector } from 'react-redux';
import { FilterSelect, SearchInput, CardList } from './';
import { SkeletonList } from './homePageMainComponents/skeleton/SkeletonList';

export const HomePageMain = () => {
  const { isMobile, isLoading } = useSelector(state => state.ui);

  return (
    <main className="bg-veryLightGray py-4 px-6 dark:bg-veryDarkBlueDarkMode">
      <section className={`${isMobile ? 'flex-col gap-12 justify-start' : ''} flex w-full`}>
        <SearchInput isMobile={isMobile} />
        <FilterSelect isMobile={isMobile} />
      </section>
      <section className={`${isMobile ? 'text-sm' : 'text-md'} w-full`}>
        {/* <CardList />*/}
        {isLoading ? <SkeletonList /> : ''}
      </section>
    </main>
  );
};
