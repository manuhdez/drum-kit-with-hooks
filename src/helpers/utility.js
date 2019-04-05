export const generateRandomId = () => {
  return Math.floor(Math.random() * new Date().getTime);
};