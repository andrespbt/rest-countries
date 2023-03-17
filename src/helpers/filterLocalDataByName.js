export const filterLocalDataByName = (data, name) => {
  return data.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));
};
