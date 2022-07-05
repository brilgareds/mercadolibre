import React from 'react';
import { useSelector } from 'react-redux';
import './PriceItem.css';

export function PriceItem() {
  const { itemDetail } = useSelector((state: any) => state.items);
  const moneyFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return (
    <div className="price-item">
      <span className="symbol-and-integer-value">
        <span>{moneyFormatter.format(itemDetail.price?.amount || 0).slice(2)}</span>
      </span>
      <span className="float-value">{(`0${itemDetail.price?.decimals}`).slice(-2)}</span>
    </div>
  );
}
