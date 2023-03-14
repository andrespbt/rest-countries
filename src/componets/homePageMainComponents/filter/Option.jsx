export const Option = ({ continent, onClick }) => {
  return (
    <li
      className="p-2 hover:cursor-pointer"
      onClick={onClick}>
      {continent}
    </li>
  );
};
