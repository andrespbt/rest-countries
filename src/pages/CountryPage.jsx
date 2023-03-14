import { useLocation } from 'react-router-dom';
import { Header } from '../componets';
import { CountryPageMain } from '../componets';

export const CountryPage = () => {
  const location = useLocation();
  let countryCode = location.pathname.split('/')[2];

  if (countryCode.length < 3) countryCode = `0${countryCode}`;

  return (
    <>
      <Header />
      <CountryPageMain code={countryCode} />
    </>
  );
};
