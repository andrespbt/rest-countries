import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardSpan } from './CardSpan';

export const Card = ({ info }) => {
  const { flags: { alt, png } = [], name: { common } = '', population, region, capital, ccn3 } = info;
  const { isMobile } = useSelector(state => state.ui);
  const navigate = useNavigate();

  return (
    <li
      className={`${
        isMobile ? 'text-sm' : 'text-base'
      } w-full bg-white dark:bg-darkBlue rounded-md pb-4 my-10 shadow-xl dark:text-white max-w-[252px] max-h-[400px] select-none hover:cursor-pointer`}
      onClick={() => navigate(`/country/${ccn3}`)}>
      <div className="h-[180px] w-full rounded-t-md">
        <img
          className="w-full h-full rounded-t-md"
          src={png}
          alt={alt}
        />
      </div>
      <div className="mx-6">
        <h3 className="w-full mt-4 font-extrabold">{common}</h3>
        <CardSpan
          text="Population"
          info={population.toLocaleString()}
        />
        <CardSpan
          text="Region"
          info={region}
        />
        <CardSpan
          text="Capital"
          info={capital}
        />
        <span className="mt-4 rounded-xl block"></span>
        <span className="mt-4 rounded-xl block"></span>
      </div>
    </li>
  );
};
