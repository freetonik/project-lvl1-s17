export const randomPositiveInt = (limit = 100) => Math.floor(Math.random() * limit) + 1;
export const isNumber = answer => !isNaN(answer);
export const isEven = num => num % 2 === 0;

export const isYesNoAnswer = (answer) => {
  if (answer === 'yes' || answer === 'no') return true;
  return false;
};
