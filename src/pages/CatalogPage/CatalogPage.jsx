import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAdverts } from '~/store/adverts/operations';
import { selectError, selectIsLoading } from '~/store/adverts/selectors';
import { filterList } from '~/utils';

import { SearchBar } from '~/components/SearchBar/SearchBar';
import { AdvertList } from '~/components/AdvertList/AdvertList';
import { Placeholder } from '~/components/Placeholder/Placeholder';
import { LoadMoreBtn } from './CatalogPage.styled';

const CatalogPage = () => {
  const [totalItems, setTotalItems] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(1);
  const [make, setMake] = useState('');
  const [rentalPrice, setRentalPrice] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAdverts = async () => {
      try {
        const searchParams = new URLSearchParams({ page, limit: 12 });
        if (make) searchParams.set('make', make.split('/')[0]);

        const data = await dispatch(fetchAdverts(searchParams)).unwrap();

        if (data.length < 12) setLoadMore(false);
        setTotalItems(prevItems => [...prevItems, ...data]);
      } catch (error) {
        // Error handled earlier, in thunk-operation
      }
    };

    getAdverts();
  }, [dispatch, make, page]);

  const handleIncrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const searchSubmit = ({ make, rentalPrice }) => {
    setMake(`${make}/${Date.now()}`);
    setRentalPrice(rentalPrice);
    setPage(1);
    setTotalItems([]);
    setLoadMore(true);
  };

  const filteredList = filterList({ list: totalItems, price: rentalPrice });
  const noResults = filteredList.length === 0 && !loadMore;

  return (
    <>
      <SearchBar onSubmit={searchSubmit} />
      {filteredList.length > 0 && <AdvertList adverts={filteredList} />}
      {!error && loadMore && (
        <LoadMoreBtn onClick={handleIncrementPage}>
          {isLoading ? 'Loading...' : 'Load more'}
        </LoadMoreBtn>
      )}
      {noResults && (
        <Placeholder>
          Sorry, no results found. Please try a different search query
        </Placeholder>
      )}
      {error && <Placeholder>Oops.. {error}</Placeholder>}
    </>
  );
};

export default CatalogPage;
