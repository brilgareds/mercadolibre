import React from 'react';
import './ItemState.css';
import { useSelector } from 'react-redux';

export function ItemState() {
  const { itemDetail } = useSelector((state: any) => state.items);
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
    <div className="item-state">
      <span>
        { translateCondition(itemDetail.condition) }
        {' '}
        -
        {' '}
        { itemDetail.sold_quantity }
        {' '}
        vendidos
      </span>
    </div>
  );
}
