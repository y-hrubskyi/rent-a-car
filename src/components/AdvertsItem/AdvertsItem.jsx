import {
  AboutCar,
  AccentText,
  Card,
  CardInfo,
  Detail,
  DetailsItem,
  DetailsList,
  Img,
  ImgWrapper,
  LearnMoreBtn,
  MainInfo,
} from "./AdvertsItem.styled";

export const AdvertsItem = ({ advert }) => {
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
      <LearnMoreBtn>Learn More</LearnMoreBtn>
    </Card>
  );
};
