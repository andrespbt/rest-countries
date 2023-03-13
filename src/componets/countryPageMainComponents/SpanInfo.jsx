export const SpanInfo = ({ text, info }) => {
  if (typeof info === 'object') {
    const newInfo = { ...info };
    const array = [];
    info = '';

    Object.values(newInfo).forEach(information => {
      if (typeof information === 'object') {
        Object.keys(information).forEach(informationInfo => {
          informationInfo === 'name' && array.push(information.name);
        });
      } else {
        array.push(information);
      }
    });

    array.forEach((element, index) => {
      if (index === array.length - 1) {
        info += element;
      } else {
        info += `${element}, `;
      }
    });
  }

  return (
    <span className="font-semibold text-sm">
      {text}
      <span className="font-normal"> {info}</span>
    </span>
  );
};
