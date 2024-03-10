import { useDispatch, useSelector } from "react-redux";

import { AdvertsItem } from "@/components/AdvertsItem/AdvertsItem";
import { selectFavoritesAdverts } from "@/store/adverts/selectors";
import { addToFavorites, removeFromFavorites } from "@/store/adverts/slice";
import { isFavoriteById } from "@/utils";
import { List } from "./AdvertsList.styled";

export const AdvertsList = ({ adverts }) => {
  const favorites = useSelector(selectFavoritesAdverts);
  const dispatch = useDispatch();

  return (
    <List>
      {adverts.map((advert) => (
        <AdvertsItem
          key={advert.id}
          advert={advert}
          isFavorite={isFavoriteById(favorites, advert.id)}
          onAddFavorite={() => dispatch(addToFavorites(advert))}
          onRemoveFavorite={() => dispatch(removeFromFavorites(advert.id))}
        />
      ))}
    </List>
  );
};
