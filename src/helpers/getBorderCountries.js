export const getBorderCountries = (allCountriesData, countryCode) => {
  if (allCountriesData.length > 0) {
    const country = allCountriesData?.find(country => {
      if (country.alpha3Code) return country.alpha3Code === countryCode;
      return country.cca3 === countryCode;
    });
    return country;
  }

  return null;
};
