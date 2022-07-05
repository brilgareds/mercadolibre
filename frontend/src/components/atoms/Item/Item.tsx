import React from 'react';
import './Item.css';
import { ItemPicture } from '../ItemPicture/ItemPicture';
import { ItemDescription } from '../ItemDescription/ItemDescription';

export function Item({ item, showSeparator = false }: any) {
  return (
    <>
      <div className="item">
        <div className="item-picture-container">
          <ItemPicture item={item} />
        </div>

        <div className="item-description-container">
          <ItemDescription item={item} />
        </div>
      </div>
      {
        showSeparator && <hr className="item-separator" />
      }
    </>
  );
}
