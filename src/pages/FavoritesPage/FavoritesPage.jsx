import { useSelector } from 'react-redux';

import { selectFavoritesAdverts } from '~/store/adverts/selectors';

import { AdvertList } from '~/components/AdvertList/AdvertList';
import { Placeholder } from '~/components/Placeholder/Placeholder';

const FavoritesPage = () => {
  const data = useSelector(selectFavoritesAdverts);

  if (data.length === 0) {
    return <Placeholder>Your list of favorites is currently empty</Placeholder>;
  }

  return <AdvertList adverts={data} />;
};

export default FavoritesPage;
