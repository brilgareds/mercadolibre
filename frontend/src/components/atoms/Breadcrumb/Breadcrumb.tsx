import React from 'react';
import './Breadcrumb.css';

export function Breadcrumb() {
  return (
    <section>
      <ul className="breadcrumb">
        <li><span>Electrónica, Audio y Video</span></li>
        <li><span>iPod</span></li>
        <li><span>Reproductores</span></li>
        <li><span>iPod touch</span></li>
        <li><b>32 GB</b></li>
      </ul>
    </section>
  );
}
