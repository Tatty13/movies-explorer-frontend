/**
 * @param {number} min - time in minutes
 * @param {string} hoursTitle - name for hours. Default value is 'ч'.
 * @param {string} minsTitle - name for minutes. Default value is 'м'.
 * @returns {string}
 */
const convertMinsToHhMm = (min, hoursTitle = 'ч', minsTitle = 'м') => {
  const hh = Math.floor(min / 60);
  const mm = min % 60;
  return (hh ? `${hh}${hoursTitle} ` : '') + `${mm}${minsTitle}`;
};

export { convertMinsToHhMm };
