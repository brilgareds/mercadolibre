import React from 'react';
import './Breadcrumb.css';

export function Breadcrumb() {
  return (
    <section>
      <ul className="breadcrumb">
        <li><span>Home</span></li>
        <li><span>Pictures</span></li>
        <li><span>Summer 15</span></li>
        <li>Italy</li>
      </ul>
    </section>
  );
}
