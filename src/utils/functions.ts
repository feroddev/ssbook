export const converteToTitle = (text: string) => {
  const textLowerCase = text.toLowerCase();
  const newText = textLowerCase[0].toUpperCase() + textLowerCase.slice(1);
  return newText;
};
