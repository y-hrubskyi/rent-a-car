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

  const searchSubmit = ({ make }) => {
    setMake(`${make}/${Date.now()}`);
    setPage(1);
    setTotalItems([]);
    setLoadMore(true);
  };

  return (
    <>
      <SearchBar onSubmit={searchSubmit} />
      {totalItems.length > 0 && <AdvertsList adverts={totalItems} />}
      {loadMore && (
        <LoadMoreBtn onClick={handleIncrementPage}>
          {isLoading ? "Loading..." : "Load more"}
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CatalogPage;
