import { Header } from './componets';
import { RestCountriesRouter } from './router/RestCountriesRouter';

export const RestCountries = ({ children }) => {
  return (
    <>
      <RestCountriesRouter />
    </>
  );
};
