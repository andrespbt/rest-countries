export const Suggestions = ({ results }) => {
    const reducedResults = results.length > 20 ? results.slice(0, 20) : results;
  
    const onCountryNameClick = e => {
      console.log(e.target.value);
    };
  
    const options = reducedResults.map((result, index) => (
      <li
        key={index}
        className="dark:text-white px-4 py-2 border-b-2 border-b-darkGray/20 hover:cursor-pointer last-of-type:border-b-0 first-of-type:border-t-2 first-of-type:border-t-darkGray/20"
        onClick={onCountryNameClick}
        value={result.ccn3}>
        {result.name.common}
      </li>
    ));
    return <ul className="relative bottom-2">{options}</ul>;
  };
  