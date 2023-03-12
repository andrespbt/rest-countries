import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountryPage } from '../pages/CountryPage';
import { HomePage } from '../pages/HomePage';

export const RestCountriesRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'country/:countryCode',
      element: <CountryPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
