import React from 'react';
import './ItemDescription.css';
import { useNavigate } from 'react-router-dom';

export function ItemDescription({ item }: any) {
  const moneyFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  const navigate = useNavigate();
  const redirectToDetail = () => {
    navigate(`/items/${item.id}`);
  };

  const translateCondition = (condition: string) => {
    let newCodition = condition;
    const languague = (window?.navigator?.language)?.split('-')?.[0]?.trim()?.toLowerCase() || '';

    if (languague === 'es') {
      if (condition === 'new') newCodition = 'nuevo';
      else if (condition === 'used') newCodition = 'usado';
    }

    return newCodition;
  };

  return (
    <>
      <div className="important-data">
        <div className="price-and-benefics" onClick={() => { redirectToDetail(); }}>
          <span className="price">
            {moneyFormatter.format(item.price?.amount || 0).slice(2)}
            <span className="float-value-results">{(`0${item.price?.decimals}`).slice(-2)}</span>
          </span>

          {
            item.free_shiping && (
              <span className="delivery-icon-container">
                <img src="/Assets/ic_shipping.png" alt="shipping" />
              </span>
            )
          }
        </div>

        <div className="extra-data">
          <span>{ item.state }</span>
        </div>
      </div>

      <div>
        <span className="text-item-descripcion" onClick={() => { redirectToDetail(); }}>{ item.title }</span>
      </div>

      <div className="item-condition">
        { translateCondition(item.condition) }
        !
      </div>
    </>
  );
}
