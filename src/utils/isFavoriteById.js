export const isFavoriteById = (list, id) =>
  list.some((item) => item?.id === id);
