import {
  AboutCar,
  AccentCondition,
  AccentText,
  CardInfo,
  CardInfoSectionTitle,
  Condition,
  ConditionItem,
  ConditionsList,
  Description,
  Detail,
  DetailsItem,
  DetailsList,
  FeaturesList,
  Img,
  ImgWrapper,
  RentalCarBtn,
} from "./AdvertModal.styled";
import { ModalBase } from "@/components/ModalBase/ModalBase";

export const AdvertModal = ({
  onClose,
  advert: {
    id,
    year,
    make,
    model,
    description,
    type,
    img,
    fuelConsumption,
    engineSize,
    address,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  },
}) => {
  const [country, city] = address.split(", ").reverse();
  const details = [
    city,
    country,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];
  const detailsList = details.map((detail) => (
    <DetailsItem key={detail}>
      <Detail>{detail}</Detail>
    </DetailsItem>
  ));

  const featuresList = [...accessories, ...functionalities].map((feature) => (
    <DetailsItem key={feature}>
      <Detail>{feature}</Detail>
    </DetailsItem>
  ));

  const formattedMileage = mileage.toLocaleString("en-US");
  const [currencySymbol, ...amount] = rentalPrice;
  const formattedPrice = amount.join("") + currencySymbol;
  const additionalConditions = [
    `Mileage: ${formattedMileage}`,
    `Price: ${formattedPrice}`,
  ];
  const splittedConditions = rentalConditions
    .split("\n")
    .concat(additionalConditions)
    .map((item) => item.split(":"));

  const conditionsList = splittedConditions.map(([condition, value]) => (
    <ConditionItem key={condition}>
      <Condition>
        {condition}
        {value && ":"}
        {value && <AccentCondition>{value}</AccentCondition>}
      </Condition>
    </ConditionItem>
  ));

  return (
    <ModalBase onClose={onClose}>
      <ImgWrapper>
        <Img src={img} alt={`${make} ${model}`} />
      </ImgWrapper>
      <CardInfo>
        <div>
          <AboutCar>
            {make} <AccentText>{model}</AccentText>, {year}
          </AboutCar>
          <DetailsList>{detailsList}</DetailsList>
          <Description>{description}</Description>
        </div>
        <div>
          <CardInfoSectionTitle>
            Accessories and functionalities:
          </CardInfoSectionTitle>
          <FeaturesList>{featuresList}</FeaturesList>
        </div>
        <div>
          <CardInfoSectionTitle>Rental Conditions:</CardInfoSectionTitle>
          <ConditionsList>{conditionsList}</ConditionsList>
        </div>
      </CardInfo>
      <RentalCarBtn href="tel:+380730000000">Rental Car</RentalCarBtn>
    </ModalBase>
  );
};
