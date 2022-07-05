import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setQueryParams } from '../../../store/slices/itemsSlice';
import { MainHeader } from '../MainHeader/MainHeader';

export function HeaderContent() {
  useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  const [getParams] = useSearchParams();

  useEffect(() => {
    const queryParams = getParams.get('search');

    dispatch(setQueryParams(queryParams));
  }, [dispatch, getParams]);

  return (
    <MainHeader />
  );
}
