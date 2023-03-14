import React from 'react';

export const Button = ({ classes, onClick, icon, text }) => {
  const { button, span } = classes;
  return (
    <button
      className={`${button} border-[1px] border-darkGray/10 dark:bg-darkBlue dark:text-white rounded-sm h-[50px] relative shadow-xl bg-white`}
      onClick={onClick}>
      {icon && icon}
      <span className={`${span} text-base`}>{text?.length > 10 ? text.slice(0, 10).concat('...') : text}</span>
    </button>
  );
};
