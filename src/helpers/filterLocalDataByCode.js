export const filterLocalDataByCode = (data, code) => {
  return data.filter(country => country.alpha3Code.toLowerCase() === code.toLowerCase());
};
