import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuerySearcher } from '../../../store/slices/itemsSlice';
import './SearchInput.css';

export function SearchInput() {
  const { queryParams, querySearcher } = useSelector((state: any) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (queryParams) {
      dispatch(setQuerySearcher(queryParams));
    }
  }, [dispatch, queryParams]);

  return (
    <input
      type="text"
      placeholder="Nunca dejes de buscar"
      value={querySearcher}
      onChange={(e) => dispatch(setQuerySearcher(e.target.value))}
      required
    />
  );
}
