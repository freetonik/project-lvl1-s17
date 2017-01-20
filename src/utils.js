export const randomPositiveInt = (limit = 100) => {
  return Math.floor(Math.random() * (limit) + 1);
}

export const isNumber = answer => {
  return !isNaN(answer);
}