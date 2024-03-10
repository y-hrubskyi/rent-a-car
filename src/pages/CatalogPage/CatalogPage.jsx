import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchBar } from "./SearchBar/SearchBar";
import { AdvertsList } from "@/components/AdvertsList/AdvertsList";
import { fetchAdverts } from "@/store/adverts/operations";
import { selectIsLoading } from "@/store/adverts/selectors";
import { LoadMoreBtn } from "./CatalogPage.styled";

const CatalogPage = () => {
  const [totalItems, setTotalItems] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(1);
  const [make, setMake] = useState("");
  const [rentalPrice, setRentalPrice] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAdverts = async () => {
      const searchParams = new URLSearchParams({ page, limit: 12 });
      if (make) searchParams.set("make", make.split("/")[0]);

      const data = await dispatch(fetchAdverts(searchParams)).unwrap();

      if (data.length < 12) setLoadMore(false);
      setTotalItems((prevItems) => [...prevItems, ...data]);
    };

    getAdverts();
  }, [dispatch, make, page]);

  const handleIncrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const searchSubmit = ({ make, rentalPrice }) => {
    setMake(`${make}/${Date.now()}`);
    setRentalPrice(rentalPrice);
    setPage(1);
    setTotalItems([]);
    setLoadMore(true);
  };

  const filterList = (list) => {
    if (!rentalPrice) return list;

    return list.filter(
      (item) => Number(item.rentalPrice.slice(1)) <= rentalPrice
    );
  };

  const filteredList = filterList(totalItems);

  return (
    <>
      <SearchBar onSubmit={searchSubmit} />
      {filteredList.length > 0 && <AdvertsList adverts={filteredList} />}
      {loadMore && (
        <LoadMoreBtn onClick={handleIncrementPage}>
          {isLoading ? "Loading..." : "Load more"}
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CatalogPage;
