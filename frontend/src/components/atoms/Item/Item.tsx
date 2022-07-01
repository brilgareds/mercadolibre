import React from 'react';
import './Item.css';
import { ItemPicture } from '../ItemPicture/ItemPicture';
import { ItemDescription } from '../ItemDescription/ItemDescription';

export function Item({ path, showSeparator = false }: any) {
  return (
    <>
      <div className="item">
        <div className="item-picture-container">
          <ItemPicture path={path} />
        </div>

        <div className="item-description-container">
          <ItemDescription />
        </div>
      </div>
      {
        showSeparator && <hr className="item-separator" />
      }
    </>
  );
}
