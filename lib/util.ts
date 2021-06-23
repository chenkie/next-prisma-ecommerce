export const formatAsCurrency = (value: number) => {
  const valueInDollars = value / 100;
  return `$${valueInDollars.toFixed(2)}`;
};
