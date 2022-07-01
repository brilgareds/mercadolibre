import React from 'react';
import './ItemPicture.css';

export function ItemPicture({ path }: any) {
  return (
    <img src={path} alt="" className="item-picture" />
  );
}
