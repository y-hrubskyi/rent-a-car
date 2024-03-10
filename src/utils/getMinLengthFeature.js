export const getMinLengthFeature = (accessories, functionalities) =>
  [...accessories, ...functionalities].reduce(
    (min, current) => (current.length < min.length ? current : min),
    accessories[0]
  );
