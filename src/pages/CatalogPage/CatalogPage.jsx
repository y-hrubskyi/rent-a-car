import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAdverts } from "@/store/adverts/operations";
import { selectAdverts } from "@/store/adverts/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  console.log(data);

  return <h2 style={{ textAlign: "center" }}>Catalog Page</h2>;
};

export default CatalogPage;
