import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailItem } from '../../../atoms/DetailItem/DetailItem';
import { BigPictureItem } from '../../../atoms/BigPictureItem/BigPictureItem';
import { setCategories, setItemDetail, setItemId } from '../../../../store/slices/itemsSlice';
import './ItemDetail.css';

export function ItemDetail() {
  const { id } = useParams();
  const { itemId, itemDetail } = useSelector((state: any) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setItemId(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (itemId) {
      const getDetailItem = () => {
        dispatch(setCategories([]));
        dispatch(setItemDetail({}));

        fetch(`http://localhost:4000/api/items/${itemId}`)
          .then((result) => result.json())
          .then((result) => {
            dispatch(setItemDetail(result.item));
            dispatch(setCategories(result.item?.categories));
          })
          .catch(console.error);
      };

      getDetailItem();
    }
  }, [dispatch, itemId]);

  return (
    <div className="main-content">
      <section className="item-detail-container">
        {
          Object.keys(itemDetail || {}) && (
            <>
              <div className="main-detail-item-container">
                <BigPictureItem />
                <DetailItem />
              </div>

              <div className="full-description-container">
                <div className="title-container">
                  <h2>Descripción del producto</h2>
                </div>

                <div className="full-description-item">
                  <p>{itemDetail.description}</p>
                </div>
              </div>
            </>
          )
        }

      </section>

    </div>
  );
}
