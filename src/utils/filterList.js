export const filterList = ({ list, price }) => {
  if (!price) return list;
  return list.filter(item => Number(item.rentalPrice.slice(1)) <= price);
};
