import React from 'react';
import './PriceItem.css';

export function PriceItem() {
  return (
    <div className="price-item">
      <span className="integer-value">$ 1.980</span>
      <span className="float-value">00</span>
    </div>
  );
}
