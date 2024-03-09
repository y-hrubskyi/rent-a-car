import { AdvertsItem } from "@/components/AdvertsItem/AdvertsItem";
import { List } from "./AdvertsList.styled";

export const AdvertsList = ({ adverts }) => {
  return (
    <List>
      {adverts.map((advert) => (
        <AdvertsItem key={advert.id} advert={advert} />
      ))}
    </List>
  );
};
