import React from 'react';
import { BuyBoton } from '../BuyBoton/BuyBoton';
import { ItemState } from '../ItemState/ItemState';
import { NameItem } from '../NameItem/NameItem';
import { PriceItem } from '../PriceItem/PriceItem';
import './DetailItem.css';

export function DetailItem() {
  return (
    <div className="detail-item">
      <ItemState />
      <NameItem />
      <PriceItem />
      <BuyBoton />
    </div>
  );
}
