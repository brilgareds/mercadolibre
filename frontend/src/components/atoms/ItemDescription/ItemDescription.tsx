import React from 'react';
import './ItemDescription.css';

export function ItemDescription() {
  return (
    <>
      <div className="important-data">
        <div className="price-and-benefics">
          <span className="price">$ 1.980</span>
          <span className="delivery-icon-container">
            <img src="/Assets/ic_shipping.png" alt="" />
          </span>
        </div>

        <div className="extra-data">
          Capital Federal
        </div>
      </div>

      <div>
        Apple Ipod Touch 5g 16gb Negro Igual A Nuevo
      </div>

      <div>
        Completo Unico!
      </div>
    </>
  );
}
