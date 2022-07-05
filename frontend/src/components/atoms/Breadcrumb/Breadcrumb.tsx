import React from 'react';
import './Breadcrumb.css';
import { useSelector } from 'react-redux';

export function Breadcrumb() {
  const { categories } = useSelector((state: any) => state.items);

  return (
    <section>
      <ul className="breadcrumb">
        {
          categories && categories.map((category: any, i: number) => {
            if (i !== categories.length - 1) return <li key={category}><span>{category}</span></li>;
            return <li key={category}><b>{category}</b></li>;
          })
        }
      </ul>
    </section>
  );
}
