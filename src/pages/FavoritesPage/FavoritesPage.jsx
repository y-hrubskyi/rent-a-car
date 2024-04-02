import { useSelector } from "react-redux";

import { Placeholder } from "@/components/Placeholder/Placeholder";
import { AdvertList } from "@/components/AdvertList/AdvertList";
import { selectFavoritesAdverts } from "@/store/adverts/selectors";

const FavoritesPage = () => {
  const data = useSelector(selectFavoritesAdverts);

  if (data.length === 0) {
    return <Placeholder>Your list of favorites is currently empty</Placeholder>;
  }

  return <AdvertList adverts={data} />;
};

export default FavoritesPage;
