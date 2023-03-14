export const Button = ({ classes, onClick, icon, text }) => {
  const tooltip = text?.length > 10;
  const { button, span } = classes;
  return (
    <div className="relative">
      <button
        className={`${button} peer border-[1px] border-darkGray/10 dark:bg-darkBlue dark:text-white rounded-sm h-[50px] relative shadow-xl bg-white`}
        onClick={onClick}>
        {icon && icon}
        <span className={`${span} text-base`}>{text?.length > 10 ? text.slice(0, 10).concat('...') : text}</span>
      </button>
      {tooltip && (
        <span className="hidden absolute peer-hover:inline top-[-25px] border-2 p-2 text-sm bg-[black] text-white rounded-md z-10 w-full text-center">
          {text}
        </span>
      )}
    </div>
  );
};
