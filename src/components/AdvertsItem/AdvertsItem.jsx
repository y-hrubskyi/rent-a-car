import { AdvertModal } from "@/components/AdvertModal/AdvertModal";
import {
  AboutCar,
  AccentText,
  Card,
  CardInfo,
  Detail,
  DetailsItem,
  DetailsList,
  HeartBtn,
  HeartIcon,
  Img,
  ImgWrapper,
  LearnMoreBtn,
  MainInfo,
} from "./AdvertsItem.styled";
import { useModal } from "@/hooks/useModal";

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

  const [country, city] = address.split(", ").reverse();
  const feature = [...accessories, ...functionalities].reduce(
    (min, current) => (current.length < min.length ? current : min),
    accessories[0]
  );

  const details = [city, country, rentalCompany, type, make, id, feature];
  const detailsList = details.map((detail) => (
    <DetailsItem key={detail}>
      <Detail>{detail}</Detail>
    </DetailsItem>
  ));

  return (
    <Card>
      <ImgWrapper>
        <Img src={img} alt={`${make} ${model}`} />
        <HeartBtn type="button" onClick={handleClick}>
          <HeartIcon isfavorite={isFavorite ? " " : ""} />
        </HeartBtn>
      </ImgWrapper>
      <CardInfo>
        <MainInfo>
          <AboutCar>
            {make} <AccentText>{model}</AccentText>, {year}
          </AboutCar>
          <AboutCar>{rentalPrice}</AboutCar>
        </MainInfo>
        <DetailsList>{detailsList}</DetailsList>
      </CardInfo>
      <LearnMoreBtn onClick={toggleModal}>Learn More</LearnMoreBtn>
      {isOpen && <AdvertModal onClose={toggleModal} advert={advert} />}
    </Card>
  );
};
