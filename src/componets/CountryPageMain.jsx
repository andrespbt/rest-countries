import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCountriesQuery, useGetCountryByCodeQuery } from '../store/apis/countriesAPI';
import { Button } from './countryPageMainComponents/Button';
import { SpanInfo } from './countryPageMainComponents/SpanInfo';
import { PaginationArrowIcon } from './icons/PaginationArrowIcon';

export const CountryPageMain = ({ code }) => {
  const [countriesData, setCountriesData] = useState();
  const { data = [] } = useGetCountryByCodeQuery(code.replace('/', ''));
  const { data: allCountriesData = [] } = useGetCountriesQuery();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCountriesData(allCountriesData);
    }, 50);
  }, []);

  const arrowIcon = (
    <PaginationArrowIcon
      className="absolute rotate-180 fill top-[0.55rem] left-5 dark:fill-white"
      viewBox="0 0 15 15"
      height="16px"
      width="16px"
    />
  );

  const getBorderCountries = countryCode => {
    if (allCountriesData.length > 0) {
      const {
        cca3,
        name: { common },
      } = allCountriesData?.find(countries => countries.cca3 === countryCode);
      return { cca3, common };
    }

    return { cca3: '', common: '' };
  };

  return (
    <>
      <main className="dark:text-white bg-veryLightGray dark:bg-veryDarkBlueDarkMode p-6 text-base">
        <section>
          <Button
            classes={{ button: 'w-28 px-4', span: 'ml-3' }}
            onClick={() => navigate('/')}
            icon={arrowIcon}
            text="Back"
          />
        </section>
        <section>
          {data &&
            data.map(country => {
              const {
                name: { common },
                name: { nativeName },
                population,
                region,
                flags,
                subregion,
                capital,
                tld,
                currencies,
                languages,
                borders,
              } = country;

              return (
                <div
                  key={code}
                  className="mt-10 py-10">
                  <div>
                    <img
                      src={flags.png}
                      alt={flags.alt}
                    />
                  </div>
                  <div className="mt-5 flex flex-col gap-4">
                    <h2 className="font-extrabold">{common}</h2>
                    <div className="flex flex-col gap-2">
                      <SpanInfo
                        text="Native name:"
                        info={Object.values(nativeName)[0].official}
                      />
                      <SpanInfo
                        text="Population:"
                        info={population.toLocaleString()}
                      />
                      <SpanInfo
                        text="Region:"
                        info={region}
                      />
                      <SpanInfo
                        text="Sub Region:"
                        info={subregion}
                      />
                      <SpanInfo
                        text="Capital:"
                        info={capital}
                      />
                    </div>
                    <div className="mt-5 flex flex-col gap-4">
                      <SpanInfo
                        text="Top level domain:"
                        info={tld[0]}
                      />
                      <SpanInfo
                        text="Currencies:"
                        info={{ ...currencies }}
                      />
                      <SpanInfo
                        text="Languajes:"
                        info={languages}
                      />
                    </div>
                    <div className="mt-5">
                      {/*  */}
                      {borders && (
                        <>
                          <h3 className="font-semibold mb-4">Border Countries</h3>
                          {borders?.map(countryCode => {
                            const { common, cca3 } = getBorderCountries(countryCode);
                            return (
                              <Button
                                key={countryCode}
                                text={common}
                                onClick={() => navigate(`/country/${cca3}`)}
                                classes={{ button: 'w-32 m-2 text-center' }}
                              />
                            );
                          })}
                        </>
                      )}

                      <div className="flex gap-4"></div>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
      </main>
    </>
  );
};
