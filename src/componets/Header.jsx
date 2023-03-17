import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MoonIcon, MoonFilledIcon } from './icons';
import { toggleMode, setIsMobile } from '../store/features/ui/uiSlice';

export const Header = () => {
  const { isDarkMode, isMobile } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [resolution, setResolution] = useState(window.screen.width);

  const onButtonModeClick = () => {
    dispatch(toggleMode());
  };

  const onChangeResolution = () => {
    setResolution(window.screen.width);
  };

  // Handle ui mode (dark-mode, light-mode)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle window resolution
  useEffect(() => {
    if (isMobile && resolution >= 1440) dispatch(setIsMobile(false));
    if (!isMobile && resolution < 1440) dispatch(setIsMobile(true));

    window.addEventListener('resize', onChangeResolution);

    return () => {
      window.removeEventListener('resize', onChangeResolution);
    };
  }, [resolution]);

  return (
    <header
      className={`${
        isMobile ? 'text-sm' : 'text-base'
      } flex px-4 py-6 h-[15vh] items-center justify-between dark:bg-darkBlue md:px-16`}>
      <h1
        className="font-extrabold dark:text-white md:text-xl hover:cursor-pointer"
        onClick={() => navigate('/')}>
        Where in the world?
      </h1>
      <button
        className="flex gap-2 font-semibold hover:cursor-pointer"
        onClick={onButtonModeClick}>
        {!isDarkMode ? (
          <MoonIcon
            width="16px"
            height="16px"
            className="inline"
            viewBox="-.5 -3.5 20 20"
          />
        ) : (
          <MoonFilledIcon
            width="16px"
            height="16px"
            className="inline"
            fill="white"
            viewBox="-.5 -3.5 20 20"
          />
        )}

        <span className="dark:text-white">{isDarkMode ? 'Light' : 'Dark'} Mode</span>
      </button>
    </header>
  );
};
