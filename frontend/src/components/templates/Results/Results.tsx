import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategories, setItems } from '../../../store/slices/itemsSlice';
import { Item } from '../../atoms/Item/Item';
import './Results.css';

export function Results() {
  const { items, queryParams } = useSelector((state: any) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(setItems([]));
      dispatch(setCategories([]));

      if (queryParams) {
        const getItems = () => {
          fetch(`http://localhost:4000/api/items?q=${queryParams}`)
            .then((result) => result.json())
            .then((result) => {
              const { items: newItems, categories: newCategories } = result;

              dispatch(setItems(newItems));
              dispatch(setCategories(newCategories));
            })
            .catch(console.error);
        };

        getItems();
      }
    } catch (e) {
      console.error(e);
    }
  }, [dispatch, queryParams]);

  return (
    <div className="main-content">
      <section className="results-container">
        <div className="items">
          {
            items && items.map((item: any, i: any) => {
              const showSeparator = i !== (items.length - 1);

              return <Item key={item.id} item={item} showSeparator={showSeparator} />;
            })
          }
        </div>
      </section>
    </div>

  );
}
