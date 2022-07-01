import React from 'react';
import { Item } from '../../atoms/Item/Item';
import './Results.css';

export function Results() {
  const items = [
    { path: '/Assets/Ipod.jpg' },
    { path: '/Assets/Ipod2.jpg' },
    { path: '/Assets/Ipod3.jpg' },
    { path: '/Assets/Ipod4.jpg' },
  ];

  return (
    <div className="main-content">
      <section className="content-container">
        <div className="items">
          {
            items.map(({ path }, i) => {
              const showSeparator = i !== (items.length - 1);

              return <Item key={path} path={path} showSeparator={showSeparator} />;
            })
          }
        </div>
      </section>
    </div>

  );
}
