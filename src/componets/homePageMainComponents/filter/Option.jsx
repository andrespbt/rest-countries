export const Option = ({ continent, onClick }) => {
  return (
    <li
      className="p-2"
      onClick={onClick}>
      {continent}
    </li>
  );
};
