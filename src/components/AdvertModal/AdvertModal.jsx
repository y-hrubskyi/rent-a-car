import { createConditionsDataArr, createDetailsDataArr } from '@/utils';

import { ModalBase } from '@/components/ModalBase/ModalBase';
import * as SC from './AdvertModal.styled';

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
    rentalPrice
  }
}) => {
  const details = createDetailsDataArr({
    id,
    year,
    type,
    address,
    fuelConsumption,
    engineSize
  });
  const detailsList = details.map(detail => (
    <SC.DetailsItem key={detail}>
      <SC.Detail>{detail}</SC.Detail>
    </SC.DetailsItem>
  ));

  const featuresList = [...accessories, ...functionalities].map(feature => (
    <SC.DetailsItem key={feature}>
      <SC.Detail>{feature}</SC.Detail>
    </SC.DetailsItem>
  ));

  const splittedConditions = createConditionsDataArr({
    mileage,
    rentalPrice,
    rentalConditions
  });
  const conditionsList = splittedConditions.map(([condition, value]) => (
    <SC.ConditionItem key={condition}>
      <SC.Condition>
        {condition}
        {value && ':'}
        {value && <SC.AccentCondition>{value}</SC.AccentCondition>}
      </SC.Condition>
    </SC.ConditionItem>
  ));

  return (
    <ModalBase onClose={onClose}>
      <SC.ImgWrapper>
        <SC.Img src={img} alt={`${make} ${model}`} />
      </SC.ImgWrapper>
      <SC.CardInfo>
        <div>
          <SC.AboutCar>
            {make} <SC.AccentText>{model}</SC.AccentText>, {year}
          </SC.AboutCar>
          <SC.DetailsList>{detailsList}</SC.DetailsList>
          <SC.Description>{description}</SC.Description>
        </div>
        <div>
          <SC.CardInfoSectionTitle>
            Accessories and functionalities:
          </SC.CardInfoSectionTitle>
          <SC.FeaturesList>{featuresList}</SC.FeaturesList>
        </div>
        <div>
          <SC.CardInfoSectionTitle>Rental Conditions:</SC.CardInfoSectionTitle>
          <SC.ConditionsList>{conditionsList}</SC.ConditionsList>
        </div>
      </SC.CardInfo>
      <SC.RentalCarBtn href="tel:+380730000000">Rental Car</SC.RentalCarBtn>
    </ModalBase>
  );
};
