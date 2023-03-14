export const getBorderCountries = (allCountriesData, countryCode) => {
  if (allCountriesData.length > 0) {
    const {
      cca3,
      name: { common },
    } = allCountriesData?.find(countries => countries.cca3 === countryCode);
    return { cca3, common };
  }

  return { cca3: '', common: '' };
};
