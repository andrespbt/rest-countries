import { useNavigate } from 'react-router-dom';
import { getBorderCountries } from '../helpers/getBorderCountries';
import { useGetCountriesQuery, useGetCountryByCodeQuery } from '../store/apis/countriesAPI';
import { Button } from './countryPageMainComponents/Button';
import { SkeletonCountryPage } from './countryPageMainComponents/skeleton/SkeletonCountryPage';
import { SpanInfo } from './countryPageMainComponents/SpanInfo';
import { PaginationArrowIcon } from './icons/PaginationArrowIcon';

export const CountryPageMain = ({ code }) => {
  console.log(code);
  const { data = [], isSuccess } = useGetCountryByCodeQuery(code.replace('/', ''));
  const { data: allCountriesData = [] } = useGetCountriesQuery();
  const navigate = useNavigate();

  const arrowIcon = (
    <PaginationArrowIcon
      className="absolute rotate-180 fill top-[1rem] left-5 dark:fill-white"
      viewBox="0 0 15 15"
      height="16px"
      width="16px"
    />
  );

  return (
    <>
      <main className="dark:text-white bg-veryLightGray dark:bg-veryDarkBlueDarkMode p-6 md:p-0  text-base min-h-[calc(100vh-98px)]">
        <section className="md:pt-8 md:pl-16">
          <Button
            classes={{ button: 'w-28 px-3', span: 'ml-3' }}
            onClick={() => navigate('/')}
            icon={arrowIcon}
            text="Back"
          />
        </section>
        <section className="md:mt-8 md:ml-8">
          {isSuccess ? (
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
                  className="mt-10 py-10 md:flex md:justify-around">
                  <div className="md:max-h-[350px] md:w-[40%]">
                    <img
                      className="min-w-[320px] w-[320px] h-[160px] md:w-[500px] md:h-[300px]"
                      src={flags.png}
                      alt={flags.alt}
                    />
                  </div>
                  <div className="mt-5 flex flex-col gap-4 md:mt-0 md:w-[40%]">
                    <h2 className="font-extrabold my-5 md:mt-0 md:text-xl">{common}</h2>
                    <div className="md:flex md:gap-28">
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
                      <div className="mt-5 flex flex-col gap-4 md:mt-0">
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
                    </div>
                    <div className="mt-5 max-w-[600px]">
                      {borders && (
                        <div className="md:flex md:items-center md:gap-2 md:flex-wrap">
                          <h3 className="font-semibold mb-4 md:mb-0">Border Countries</h3>
                          {borders?.map(countryCode => {
                            const { common, cca3 } = getBorderCountries(allCountriesData, countryCode);
                            return (
                              <Button
                                key={countryCode}
                                text={common}
                                onClick={() => navigate(`/country/${cca3}`)}
                                classes={{ button: 'w-32 m-2 text-center' }}
                              />
                            );
                          })}
                        </div>
                      )}

                      <div className="flex gap-4"></div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <SkeletonCountryPage />
          )}
        </section>
      </main>
    </>
  );
};
