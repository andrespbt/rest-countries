export const filterLocalDataByRegion = (data, filter) => {
  if (filter === 'America') filter = 'Americas';
  return data.filter(country => country.region === filter);
};
