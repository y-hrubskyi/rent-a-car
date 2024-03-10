import { splitAddress } from "./splitAddress";

export const createDetailsDataArr = ({
  id,
  year,
  type,
  address,
  fuelConsumption,
  engineSize,
}) => {
  const [country, city] = splitAddress(address);
  return [
    city,
    country,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];
};
