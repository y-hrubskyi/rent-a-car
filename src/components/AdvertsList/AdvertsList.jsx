import { useDispatch, useSelector } from "react-redux";

import { AdvertsItem } from "@/components/AdvertsItem/AdvertsItem";
import { List } from "./AdvertsList.styled";

import { selectFavoritesAdverts } from "@/store/adverts/selectors";
import { addToFavorites, removeFromFavorites } from "@/store/adverts/slice";

export const AdvertsList = ({ adverts }) => {
  const favorites = useSelector(selectFavoritesAdverts);
  const dispatch = useDispatch();

  const isFavorite = (id) => favorites.some((item) => item?.id === id);

  return (
    <List>
      {adverts.map((advert) => (
        <AdvertsItem
          key={advert.id}
          advert={advert}
          isFavorite={isFavorite(advert.id)}
          onAddFavorite={() => dispatch(addToFavorites(advert))}
          onRemoveFavorite={() => dispatch(removeFromFavorites(advert.id))}
        />
      ))}
    </List>
  );
};
