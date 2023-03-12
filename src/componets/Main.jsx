import { useSelector, useDispatch } from 'react-redux';
import { SearchIcon } from './icons/SearchIcon';

export const Main = () => {
  const { isDarkMode, isMobile } = useSelector(state => state.ui);

  return (
    <main className="bg-veryLightGray py-4 px-2 dark:bg-veryDarkBlueDarkMode">
      <div className="w-[80%] mx-auto shadow-xl dark:text-white relative">
        <SearchIcon
          width="16px"
          height="16px"
          className="absolute inset-y-0 my-auto ml-4 fill-darkGray/40 dark:fill-white stroke-2"
        />
        <input
          className={`${
            isMobile ? 'placeholder:text-sm text-sm' : 'placeholder:text-md text-md'
          }  w-full h-[60px] pl-14 dark:placeholder:text-white placeholder:text-darkGray/40 dark:bg-darkBlue rounded-md focus:outline-none`}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </main>
  );
};
