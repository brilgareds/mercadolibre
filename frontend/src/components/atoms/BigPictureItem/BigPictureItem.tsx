import React from 'react';
import { useSelector } from 'react-redux';
import './BigPictureItem.css';

export function BigPictureItem() {
  const { itemDetail } = useSelector((state: any) => state.items);

  return (
    <div className="big-picture-item">
      {
        itemDetail?.picture && <img src={itemDetail.picture} alt="item" />
      }
    </div>
  );
}
