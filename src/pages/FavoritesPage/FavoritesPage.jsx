import { useSelector } from "react-redux";

import { AdvertsList } from "@/components/AdvertsList/AdvertsList";
import { selectFavoritesAdverts } from "@/store/adverts/selectors";

const FavoritesPage = () => {
  const data = useSelector(selectFavoritesAdverts);

  return data && <AdvertsList adverts={data} />;
};

export default FavoritesPage;
