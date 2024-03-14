import { AdvertModal } from "@/components/AdvertModal/AdvertModal";
import { useModal } from "@/hooks/useModal";
import * as SC from "./AdvertsItem.styled";
import { getMinLengthFeature, splitAddress } from "@/utils";

export const AdvertsItem = ({
  advert,
  isFavorite,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  const { isOpen, toggleModal } = useModal();
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    accessories,
    functionalities,
  } = advert;

  const handleClick = () => {
    if (isFavorite) return onRemoveFavorite();
    onAddFavorite();
  };

  const [country, city] = splitAddress(address);
  const feature = getMinLengthFeature(accessories, functionalities);

  const details = [city, country, rentalCompany, type, make, id, feature];
  const detailsList = details.map((detail) => (
    <SC.DetailsItem key={detail}>
      <SC.Detail>{detail}</SC.Detail>
    </SC.DetailsItem>
  ));

  return (
    <SC.Card>
      <SC.ImgWrapper>
        <SC.Img src={img} alt={`${make} ${model}`} />
        <SC.HeartBtn type="button" onClick={handleClick}>
          <SC.HeartIcon data-is-favorite={isFavorite} />
        </SC.HeartBtn>
      </SC.ImgWrapper>
      <SC.CardInfo>
        <SC.MainInfo>
          <SC.AboutCar>
            {make} <SC.AccentText>{model}</SC.AccentText>, {year}
          </SC.AboutCar>
          <SC.AboutCar>{rentalPrice}</SC.AboutCar>
        </SC.MainInfo>
        <SC.DetailsList>{detailsList}</SC.DetailsList>
      </SC.CardInfo>
      <SC.LearnMoreBtn onClick={toggleModal}>Learn More</SC.LearnMoreBtn>
      {isOpen && <AdvertModal onClose={toggleModal} advert={advert} />}
    </SC.Card>
  );
};
