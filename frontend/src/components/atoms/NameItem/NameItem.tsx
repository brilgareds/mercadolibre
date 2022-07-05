import React from 'react';
import { useSelector } from 'react-redux';
import './NameItem.css';

export function NameItem() {
  const { itemDetail } = useSelector((state: any) => state.items);

  return (
    <div className="name-item">
      { itemDetail.title }
    </div>
  );
}
