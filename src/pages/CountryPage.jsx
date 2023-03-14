import { useLocation } from 'react-router-dom';
import { Header } from '../componets';
import { CountryPageMain } from '../componets';

export const CountryPage = () => {
  const location = useLocation();
  const countryCode = location.pathname.slice(-3).trim();

  return (
    <>
      <Header />
      <CountryPageMain code={countryCode} />
    </>
  );
};
