import { useDispatch, useSelector } from 'react-redux';

import { selectFavoritesAdverts } from '~/store/adverts/selectors';
import { addToFavorites, removeFromFavorites } from '~/store/adverts/slice';
import { isFavoriteById } from '~/utils';

import { AdvertItem } from '~/components/AdvertItem/AdvertItem';
import { List } from './AdvertList.styled';

export const AdvertList = ({ adverts }) => {
  const favorites = useSelector(selectFavoritesAdverts);
  const dispatch = useDispatch();

  return (
    <List>
      {adverts.map(advert => (
        <AdvertItem
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
