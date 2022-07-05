import React from 'react';
import './ItemPicture.css';
import { useNavigate } from 'react-router-dom';

export function ItemPicture({ item }: any) {
  const navigate = useNavigate();
  const redirectToDetailPage = () => {
    navigate(`/items/${item.id}`);
  };

  return (
    <img src={item.picture} alt="item-img" className="item-picture" onClick={() => { redirectToDetailPage(); }} />
  );
}
