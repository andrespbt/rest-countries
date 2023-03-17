import { useNavigate } from 'react-router-dom';

export const Suggestions = ({ results }) => {
  const navigate = useNavigate();
  const reducedResults = results.length > 20 ? results.slice(0, 20) : results;

  const onCountryNameClick = e => {
    navigate(`/country/${e.target.dataset.code}`);
  };

  const options = reducedResults.map((result, index) => {
    const code = result.alpha3Code || result.cca3;
    return (
      <li
        key={index}
        className="dark:text-white px-4 py-2 border-b-2 border-b-darkGray/20 hover:cursor-pointer last-of-type:border-b-0 first-of-type:border-t-2 first-of-type:border-t-darkGray/20"
        onClick={onCountryNameClick}
        data-code={code}>
        {result.name.common ? result.name.common : result.name}
      </li>
    );
  });
  return <ul className="absolute top-[2.7rem] z-[100] bg-white w-full rounded-b-md dark:bg-darkBlue">{options}</ul>;
};
