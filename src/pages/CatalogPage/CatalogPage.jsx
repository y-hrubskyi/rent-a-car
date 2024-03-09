import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AdvertsList } from "@/components/AdvertsList/AdvertsList";
import { fetchAdverts } from "@/store/adverts/operations";
import { selectAdverts } from "@/store/adverts/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return data && <AdvertsList adverts={data} />;
};

export default CatalogPage;
