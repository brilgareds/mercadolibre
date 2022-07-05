import { createSlice } from '@reduxjs/toolkit';

export interface Results {
  items: any,
  categories: Array<any>
}

const initialState: any = {
  itemId: '',
  items: [],
  categories: [],
  queryParams: '',
  querySearcher: '',
  itemDetail: {},
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setQueryParams: (state, { payload }) => { state.queryParams = payload || ''; },
    setQuerySearcher: (state, { payload }) => { state.querySearcher = payload || ''; },
    setItems: (state, { payload }) => { state.items = payload || []; },
    setCategories: (state, { payload }) => { state.categories = payload || []; },
    setItemId: (state, { payload }) => { state.itemId = payload || ''; },
    setItemDetail: (state, { payload }) => { state.itemDetail = payload || {}; },
  },
});

export const {
  setQueryParams, setQuerySearcher, setItems, setCategories, setItemId, setItemDetail,
} = itemsSlice.actions;
