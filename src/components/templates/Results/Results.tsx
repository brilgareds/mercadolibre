import React from 'react';
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
            items.map(({ path }) => (
              <div className="item" key={path}>
                <span>
                  <img src={path} alt="" />
                </span>
              </div>
            ))
          }
        </div>
      </section>
    </div>

  );
}
