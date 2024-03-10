export const formatPrice = (price) => {
  const [currencySymbol, ...amount] = price;
  return amount.join("") + currencySymbol;
};
