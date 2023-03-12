import { Option } from './Option';

export const FilterOptions = ({ onOptionClick }) => {
  return (
    <ul className="absolute bg-white dark:bg-darkBlue w-full rounded-md top-14 left-0 px-4">
      <Option
        onClick={onOptionClick}
        continent="Africa"
        value="Africa"
      />
      <Option
        onClick={onOptionClick}
        continent="America"
        value="America"
      />
      <Option
        onClick={onOptionClick}
        continent="Asia"
        value="Asia"
      />
      <Option
        onClick={onOptionClick}
        continent="Europa"
        value="Europa"
      />
      <Option
        onClick={onOptionClick}
        continent="Oceania"
        value="Oceania"
      />
    </ul>
  );
};
