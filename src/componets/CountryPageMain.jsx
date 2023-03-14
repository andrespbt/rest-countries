import { useNavigate } from 'react-router-dom';
import { useGetCountryByCodeQuery } from '../store/apis/countriesAPI';
import { SpanInfo } from './countryPageMainComponents/SpanInfo';
import { PaginationArrowIcon } from './icons/PaginationArrowIcon';

export const CountryPageMain = ({ code }) => {
  const { data = [] } = useGetCountryByCodeQuery(code);
  const navigate = useNavigate();

  return (
    <>
      <main className="dark:text-white bg-veryLightGray dark:bg-veryDarkBlueDarkMode p-6 text-base">
        <section>
          <button
            className="border-[1px] border-darkGray/10 dark:bg-darkBlue dark:text-white rounded-sm h-[35px] w-28 relative px-4 shadow-xl bg-white"
            onClick={() => navigate('/')}>
            <PaginationArrowIcon
              className="absolute rotate-180 fill top-[0.55rem] left-5 dark:fill-white"
              viewBox="0 0 15 15"
              height="16px"
              width="16px"
            />
            <span className="ml-3 text-base">Back</span>
          </button>
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

              console.log(capital);

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
                      <h3>Border Countries</h3>

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
