import { useSelector } from "react-redux";

import { Placeholder } from "@/components/Placeholder/Placeholder";
import { AdvertsList } from "@/components/AdvertsList/AdvertsList";
import { selectFavoritesAdverts } from "@/store/adverts/selectors";

const FavoritesPage = () => {
  const data = useSelector(selectFavoritesAdverts);

  if (data.length === 0) {
    return <Placeholder>Your list of favorites is currently empty</Placeholder>;
  }

  return <AdvertsList adverts={data} />;
};

export default FavoritesPage;
