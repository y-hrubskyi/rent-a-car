import { formatMileage } from "./formatMeliage";
import { formatPrice } from "./formatPrice";

export const createConditionsDataArr = ({
  mileage,
  rentalPrice,
  rentalConditions,
}) => {
  const formattedMileage = formatMileage(mileage);
  const formattedPrice = formatPrice(rentalPrice);

  const additionalConditions = [
    `Mileage: ${formattedMileage}`,
    `Price: ${formattedPrice}`,
  ];

  return rentalConditions
    .split("\n")
    .concat(additionalConditions)
    .map((item) => item.split(":"));
};
